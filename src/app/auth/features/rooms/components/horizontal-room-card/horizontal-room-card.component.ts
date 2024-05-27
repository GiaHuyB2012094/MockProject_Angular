import { Component, Input } from '@angular/core';
import { payFormat } from 'src/app/core/constants/titles/room-type.constant';
import { convertCurrencyVND } from 'src/app/shared/utils/currency';

@Component({
  selector: 'app-horizontal-room-card',
  templateUrl: './horizontal-room-card.component.html',
  styleUrls: ['./horizontal-room-card.component.scss']
})
export class HorizontalRoomCardComponent {
  @Input() id!: number 
  @Input() img: string = ''
  @Input() name: string = ''
  @Input() branch: number = 1
  @Input() price: number[] = []
  @Input() address: string = ''
  @Input() desc: string = ''
  // @Input() img:string = ''
  currency: string | 0 = 0
  constructor() {

  }
  payFormat = payFormat;


  ngOnInit(): void {
    this.convertNumberToCurrent()
  }

  convertNumberToCurrent(){
    // this.currency = convertCurrencyVND(this.price);
  }
}
