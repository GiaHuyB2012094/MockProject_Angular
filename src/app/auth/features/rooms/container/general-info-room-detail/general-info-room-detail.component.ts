import { Component, Input } from '@angular/core';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';

@Component({
  selector: 'app-general-info-room-detail',
  templateUrl: './general-info-room-detail.component.html',
  styleUrls: ['./general-info-room-detail.component.scss']
})
export class GeneralInfoRoomDetailComponent {
  @Input() room!: IRoom;
}
