import { Component, Input, OnInit } from '@angular/core';

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
  // @Input() img:string = ''
  currency: string | 0 = 0
  constructor() {

  }

  ngOnInit(): void {
  }


 
}
