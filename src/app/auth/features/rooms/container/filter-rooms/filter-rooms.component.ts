import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { payFormat, roomType } from 'src/app/core/constants/titles/room-type.constant';

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

  minPrice!: number;
  maxPrice!: number;

  private _choosedRoomTypeObj!:IRoomType;
  private _choosedRoomType!: string;
  private _priceFormat!: string;

  valuePrice!: number;


  constructor() {}

  get choosedRoomTypeObj(): IRoomType{
    return this.choosedRoomTypeObj;
  }
  set choosedRoomTypeObj(value: IRoomType){
    if (value !== this._choosedRoomTypeObj) {
      this._choosedRoomTypeObj = value;
    }
  }
  
  get choosedRoomType(): string{
    return this.choosedRoomType;
  }
  set choosedRoomType(value: string){
    if (value !== this._choosedRoomType) {
      this._choosedRoomType = value;
      this.onSetPriceValueChange();
    }
  }
  get priceFormat(): string{
    return this.priceFormat;
  }
  set priceFormat(value: string){
    if (value !== this._priceFormat) {
      this._priceFormat = value;
      this.onSetPriceValueChange();
    }
  }

  ngOnInit(): void {
    this.setInitialRoomType();  
  }

  ngAfterContentChecked(): void {
    

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  setInitialRoomType(): void{
    const PriceRoomTpyeItem = roomType[0].price;
    this.minPrice = PriceRoomTpyeItem[0].value - 100000;
    this.maxPrice = PriceRoomTpyeItem[0].value;
    this.valuePrice = PriceRoomTpyeItem[0].value - 100000;
    this.choosedRoomType = roomType[0].value;
    this.priceFormat = PriceRoomTpyeItem[0].priceFormat;
  }

  choosePriceFormatHandle(e: string) {
    this.choosedRoomType = e;
  }

  chooseRoomTypeHandle(e: string) {
    this.priceFormat = e;
  }
  
  onSetPriceValueChange(): void{
    const roomTypeObj = this.roomType.find(t => t.value === this._choosedRoomType)
    if (roomTypeObj !== undefined) {
      this._choosedRoomTypeObj = roomTypeObj;
    }
    
    const  priceRoomTpyeItem = this._choosedRoomTypeObj.price.find(t => t.priceFormat === this._priceFormat)
    if (priceRoomTpyeItem !== undefined) {
      this.minPrice = priceRoomTpyeItem!.value - 100000;
      this.maxPrice = priceRoomTpyeItem!.value;
      this.valuePrice = priceRoomTpyeItem!.value - 100000;
    }
    console.log(roomTypeObj)

    console.log(priceRoomTpyeItem)

    console.log([this.minPrice, this.maxPrice, this.valuePrice])
 
  }

}
  
