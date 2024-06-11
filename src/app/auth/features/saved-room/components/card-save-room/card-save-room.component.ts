import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-save-room',
  templateUrl: './card-save-room.component.html',
  styleUrls: ['./card-save-room.component.scss']
})
export class CardSaveRoomComponent implements OnInit{
  @Input()room : any;

  ngOnInit(): void {
    console.log(this.room);
  }
}
