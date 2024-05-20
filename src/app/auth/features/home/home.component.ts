import { Component, OnInit } from '@angular/core';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';
import { RoomsService } from 'src/app/core/services/api/rooms.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
  }

}
