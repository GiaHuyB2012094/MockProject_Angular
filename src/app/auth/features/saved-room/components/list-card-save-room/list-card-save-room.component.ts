import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-card-save-room',
  templateUrl: './list-card-save-room.component.html',
  styleUrls: ['./list-card-save-room.component.scss']
})
export class ListCardSaveRoomComponent {
  @Input()rooms :any;
  
}
