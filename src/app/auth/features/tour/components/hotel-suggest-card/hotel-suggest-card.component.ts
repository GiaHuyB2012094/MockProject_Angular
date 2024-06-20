import { Component, Input } from '@angular/core';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';

@Component({
  selector: 'app-hotel-suggest-card',
  templateUrl: './hotel-suggest-card.component.html',
  styleUrls: ['./hotel-suggest-card.component.scss']
})
export class HotelSuggestCardComponent {
  @Input() room!: IRoom;
}
