import { Component, OnInit } from '@angular/core';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';
import { RoomsService } from 'src/app/core/services/api/rooms.service';

@Component({
  selector: 'app-rooms-card-list',
  templateUrl: './rooms-card-list.component.html',
  styleUrls: ['./rooms-card-list.component.scss']
})
export class RoomsCardListComponent implements OnInit {
  rooms: IRoom[] = [];
  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.getRooms()
  }

  getRooms(): void {
    this.roomsService.getRooms().subscribe(
      data => this.rooms = data
    );
  }
}
