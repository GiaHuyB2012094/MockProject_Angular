import { Component, Input, OnInit } from '@angular/core';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';
import { convertCurrencyVND } from 'src/app/shared/utils/currency';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent implements OnInit {
  @Input() id!: number 
  @Input() img: string = ''
  @Input() name: string = ''
  @Input() branch: number = 1
  @Input() price: number = 100000
  @Input() desc: string = ''
  @Input() address: string = ''
  // @Input() img:string = ''
  currency: string | 0 = 0
  constructor() {

  }

  ngOnInit(): void {
  }


 
}
