import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-convient-room-detail',
  templateUrl: './convient-room-detail.component.html',
  styleUrls: ['./convient-room-detail.component.scss']
})
export class ConvientRoomDetailComponent {
  @Input()convenients !: string[];
}
