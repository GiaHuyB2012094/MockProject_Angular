import { Component, OnInit } from '@angular/core';
import { ITour } from 'src/app/core/models/interfaces/ITour';
import { TourService } from 'src/app/core/services/api/tour.service';

@Component({
  selector: 'app-tour-home',
  templateUrl: './tour-home.component.html',
  styleUrls: ['./tour-home.component.scss']
})
export class TourHomeComponent implements OnInit{
  tourData: ITour[] = [];
  choosedBranch = 1;

  tabs = [
    {label: 'Branch 1', value: 1},
    {label: 'Branch 2', value: 2},
    {label: 'Branch 3', value: 3}
  ]


  constructor(private tourSerivce: TourService){}

  ngOnInit(): void {
    this.tourSerivce.getTours().subscribe(
      data => this.tourData = data
    )
  }


}
