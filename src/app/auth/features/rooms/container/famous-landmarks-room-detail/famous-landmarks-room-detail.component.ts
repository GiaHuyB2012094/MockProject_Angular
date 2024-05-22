import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-famous-landmarks-room-detail',
  templateUrl: './famous-landmarks-room-detail.component.html',
  styleUrls: ['./famous-landmarks-room-detail.component.scss']
})
export class FamousLandmarksRoomDetailComponent {
  @Input() landmarks!: any[];

}
