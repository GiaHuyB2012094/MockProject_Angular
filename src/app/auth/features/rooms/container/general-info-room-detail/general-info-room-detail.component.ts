import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';

@Component({
  selector: 'app-general-info-room-detail',
  templateUrl: './general-info-room-detail.component.html',
  styleUrls: ['./general-info-room-detail.component.scss']
})
export class GeneralInfoRoomDetailComponent {
  @Input() room!: IRoom;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
  ){}

  bookingHandle(): void{
    this.activeRoute.paramMap 
      .subscribe(params => this.router.navigate(['room','booking',Number(params.get('id'))]))
  }
}
