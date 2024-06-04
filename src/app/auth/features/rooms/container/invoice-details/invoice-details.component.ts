import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from 'src/app/core/services/api/rooms.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit{
  room: any;
  roomID!: number;
  isLoading = true;

  constructor(
    private activeRoute: ActivatedRoute,
    private roomsService: RoomsService,

  ){

  }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.roomID = Number(params.get('id'));
      this.getRoomData();
    });
  }

  getRoomData(): void {
    this.roomsService.getRoomById(this.roomID).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.room = data;
        
      },
      error: (err) => console.log(err),
    });
  }
}
