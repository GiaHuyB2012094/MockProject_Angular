import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { address, branch, convenients, payFormat, roomType } from 'src/app/core/constants/titles/room-type.constant';

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
export class FilterRoomsComponent implements OnInit, AfterContentChecked, OnChanges {
  roomType = roomType;
  payFormat = payFormat;
  branch = branch;
  address = address;
  convenients = convenients;
  minPrice!: number;
  maxPrice!: number;
  choosedRoomTypeObj!:IRoomType;
  choosedRoomType!: string;
  choosedBranch: number = 1;
  choosedAddress: string = '';
  priceFormat!: string;
  valuePrice!: number;

  formGroup = new FormGroup({
    search: new FormControl(''),
    checkInDate: new FormControl((new Date()).toISOString().substring(0,10))
  })

  constructor() {}

  ngOnInit(): void {
    this.setInitial();  
  }
  ngAfterContentChecked(): void {
  }
  ngOnChanges(changes: SimpleChanges) { //only work when have input
    console.log(changes)
  }

  setInitial(): void{
    const PriceRoomTpyeItem = roomType[0].price;
    this.minPrice = PriceRoomTpyeItem[0].value - 100000;
    this.maxPrice = PriceRoomTpyeItem[0].value;
    this.valuePrice = PriceRoomTpyeItem[0].value - 100000;
    this.choosedRoomType = roomType[0].value;
    this.priceFormat = PriceRoomTpyeItem[0].priceFormat;
    this.choosedAddress = address[0].label;
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
  
  onSetPriceValueChange(): void{
    
    const roomTypeObj = this.roomType.find(t => t.value === this.choosedRoomType)

    if (roomTypeObj !== undefined) {
      this.choosedRoomTypeObj = roomTypeObj;
    }
    
    const  priceMaxRoomTpye = this.choosedRoomTypeObj.price.find(t => t.priceFormat === this.priceFormat)
    const  priceMinRoomTpye = this.choosedRoomTypeObj.price.find(t => t.priceFormat === 'hour')
    
    if (priceMaxRoomTpye !== undefined && (priceMaxRoomTpye !== priceMinRoomTpye)) {
      this.minPrice = priceMinRoomTpye!.value;
      this.maxPrice = priceMaxRoomTpye!.value;
      this.valuePrice = priceMinRoomTpye!.value;
    } else {
      this.minPrice = priceMinRoomTpye!.value / 2;
      this.maxPrice = priceMaxRoomTpye!.value;
      this.valuePrice = priceMinRoomTpye!.value /2;
    }

  }

}
  
