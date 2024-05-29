import { AfterContentChecked, AfterViewChecked, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { address, branch, payFormat, roomType } from 'src/app/core/constants/titles/room-type.constant';
import { ConvenientsService } from 'src/app/core/services/api/convenients.service';

export interface IRoomType {
  value: string,
  label: string,
  price: {priceFormat: string, value: number}[],
  img: string,
}
@Component({
  selector: 'app-filter-rooms',
  templateUrl: './filter-rooms.component.html',
  styleUrls: ['./filter-rooms.component.scss']
})
export class FilterRoomsComponent implements OnInit , AfterViewChecked {
  @Output() newItemEvent = new EventEmitter<any>();

  roomType = roomType;
  payFormat = payFormat;
  branch = branch;
  address = address;
  convenients: string[] = [];
  minPrice!: number;
  maxPrice!: number;
  choosedRoomTypeObj!:IRoomType;
  choosedRoomType: string = '';
  choosedBranch!: number;
  choosedConvents!: Array<string>;
  choosedAddress: string = '';
  priceFormat!: string;
  valuePrice!: number;
// filterOptions 
  filterOptions: any = {}
// manipulate dom
  isOpenShowFilterOptions = false;

  formGroup = new FormGroup({
    search: new FormControl(''),
    checkInDate: new FormControl((new Date()).toISOString().substring(0,10)),
    checkOutDate: new FormControl((new Date()).toISOString().substring(0,10))
  })

  constructor(
    private convenientsService: ConvenientsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.setInitial();  
    this.getConvenients();
  }

  ngAfterViewChecked(): void {
    this.updateCheckOutDate()
  }

  getConvenients(): void{
    this.convenientsService.getConveniences()
      .subscribe(data =>  this.convenients = data);
  }

  setInitial(): void{
    const PriceRoomTpyeItem = roomType[0].price;
    this.minPrice = PriceRoomTpyeItem[0].value - 100000;
    this.maxPrice = PriceRoomTpyeItem[0].value;
    this.valuePrice = PriceRoomTpyeItem[0].value - 100000;
    this.priceFormat = PriceRoomTpyeItem[0].priceFormat;
    this.choosedBranch = 0;
    this.choosedAddress = address[0].label;

    this.choosedConvents = [];
  }

  updateCheckOutDate(): void{
    const Checkin: any = this.formGroup.value.checkInDate;
    const Checkout: any = this.formGroup.value.checkOutDate;
    
    let fromDate = new Date(Checkin)
    let toDate = new Date(Checkout)

    if (fromDate.getTime() > toDate.getTime()) {
      this.formGroup.get('checkOutDate')?.patchValue(Checkin);
    } 
  }

  filterOptionsHandle(): void{
    Object.assign(this.filterOptions,{
      // search: this.formGroup.value.search,
      checkInDate: this.formGroup.value.checkInDate,
      checkOutDate: this.formGroup.value.checkOutDate,
      branch: this.choosedBranch,
      roomType: this.choosedRoomType,
      price: this.valuePrice,
      priceFormat: this.convertPriceFormat(this.priceFormat),
      convenients: this.choosedConvents,
    })
    this.formGroup.get('search')?.patchValue('');

    this.newItemEvent.emit(this.filterOptions)
    this.router.navigate(['room','general-rooms'])

  }

  clearFilterOptionsHandle(): void{
    this.setInitial();
  }

  convertPriceFormat(priceFormat: string): number{
    return this.payFormat.findIndex(pr => pr.value === priceFormat)
  }

  choosePriceFormatHandle(e: string) {
    this.priceFormat = e;
    this.onSetPriceValueChange();
  }

  chooseRoomTypeHandle(e: string) {
    this.choosedRoomType = e;
    this.onSetPriceValueChange();
  }

  chooseBranchHandle(e: number) {
    this.choosedBranch = e;
    const addrItem = address.find(addr => addr.value === e) 
    this.choosedAddress = addrItem!.label;
    this.onSetPriceValueChange();
  }
  
  chooseConveniencesHandle(e: any){
    this.choosedConvents =  e;
  }

  onSetPriceValueChange(): void{
    let roomTypeObj : any;

    if (this.choosedRoomType === '') {
      roomTypeObj = this.roomType[0];
    } else {
      roomTypeObj = this.roomType.find(t => t.value === this.choosedRoomType)
    }

    if (roomTypeObj !== undefined) {
      this.choosedRoomTypeObj = roomTypeObj;
    }
    
    const  priceMaxRoomTpye = this.choosedRoomTypeObj.price.find(t => t.priceFormat === this.priceFormat)
    const  priceMinRoomTpye = this.choosedRoomTypeObj.price.find(t => t.priceFormat === 'hour')
    
    if (priceMaxRoomTpye !== undefined && (priceMaxRoomTpye !== priceMinRoomTpye)) {
      this.minPrice = priceMinRoomTpye!.value;
      this.maxPrice = priceMaxRoomTpye!.value + 200000;
      this.valuePrice = priceMinRoomTpye!.value;
    } else {
      this.minPrice = priceMinRoomTpye!.value / 2;
      this.maxPrice = priceMaxRoomTpye!.value + 200000;
      this.valuePrice = priceMinRoomTpye!.value /2;
    }
  }

  searchHandle(): void{
    let searchKey: any = this.formGroup.value.search;
    console.log(searchKey.trim().length !== 0)
    if (searchKey.trim().length !== 0 || searchKey.trim() !== '') {
      this.router.navigate(['room','general-rooms'], {queryParams: {search: searchKey}})
    } else this.router.navigate(['room','general-rooms']);
  }

  openShowFilterOptionsHandle(): void{
    this.isOpenShowFilterOptions = !this.isOpenShowFilterOptions;
  }
}
  
