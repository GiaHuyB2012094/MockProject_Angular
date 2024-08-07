import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Perform } from 'src/app/core/models/classes/perform';
import { IBreadcrumb } from 'src/app/core/models/interfaces/IBreadcrumb.interface';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';
import { RoomsService } from 'src/app/core/services/api/rooms.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit, AfterViewChecked{
  room:any;
  isLoading = true;
  roomImgs: string[] = [];
  breadcrumbs: IBreadcrumb[] = [
    {label: 'rooms', link: '/room/general-rooms'},
  ];
  
  roomID!: number;
  activeRoute : ActivatedRoute = inject(ActivatedRoute)

  constructor(
    private roomsService : RoomsService,
    private drc : ChangeDetectorRef,
  ){
  }

  ngOnInit(): void {
    this.roomsService.room$.subscribe(data => this.room = data)

    this.activeRoute.paramMap.subscribe(params => {
      this.roomID = Number(params.get('id'));
      this.getRoomData();
     })
    
  }

  ngAfterViewChecked(): void {
    this.drc.detectChanges();
  }
  
  getRoomData(): void{
    this.roomsService.getRoomById(this.roomID)
     .subscribe({
      next: data => {
        this.room = data;
        this.isLoading = false
        this.breadcrumbs.push(
          {label: `${data.name}`, link: `/room/room-detail/${data.id}`},
        )
        this.roomImgs = [...data.imgs];
      },
      error: err => console.log(err)
     })
  }

 

}
