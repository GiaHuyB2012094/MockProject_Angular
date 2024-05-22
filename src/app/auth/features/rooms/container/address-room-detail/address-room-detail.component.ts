import { Component, Input } from '@angular/core';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';

@Component({
  selector: 'app-address-room-detail',
  templateUrl: './address-room-detail.component.html',
  styleUrls: ['./address-room-detail.component.scss']
})
export class AddressRoomDetailComponent {
  @Input() room!: IRoom;


}
