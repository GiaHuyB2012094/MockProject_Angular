import { Component, Input, OnInit } from '@angular/core';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';

@Component({
  selector: 'app-horizontal-room-card-list',
  templateUrl: './horizontal-room-card-list.component.html',
  styleUrls: ['./horizontal-room-card-list.component.scss']
})
export class HorizontalRoomCardListComponent implements OnInit{
  @Input() rooms!: IRoom[];
  ngOnInit(): void {
  }
}
