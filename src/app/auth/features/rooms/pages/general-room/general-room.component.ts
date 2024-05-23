import { Component } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/models/interfaces/IBreadcrumb.interface';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';
import { RoomsService } from 'src/app/core/services/api/rooms.service';

@Component({
  selector: 'app-general-room',
  templateUrl: './general-room.component.html',
  styleUrls: ['./general-room.component.scss']
})
export class GeneralRoomComponent {
  rooms: IRoom[] = [];
  isLoading: boolean = true;
  breadcrumbs: IBreadcrumb[] = [
    {label: 'hotel', link: '/room/general-rooms'},
  ];

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.getRooms()
  }

  getRooms(): void {
    this.roomsService.getRooms().subscribe(
      data => {
        this.rooms = data;
        this.isLoading = false;
      }
    );
  }
}
