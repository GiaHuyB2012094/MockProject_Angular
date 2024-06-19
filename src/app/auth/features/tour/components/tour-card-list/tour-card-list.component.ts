import { Component, Input } from '@angular/core';
import { ITour } from 'src/app/core/models/interfaces/ITour';
import { TourService } from 'src/app/core/services/api/tour.service';

@Component({
  selector: 'app-tour-card-list',
  templateUrl: './tour-card-list.component.html',
  styleUrls: ['./tour-card-list.component.scss']
})
export class TourCardListComponent {
  @Input()branch = 1;
  isLoading = true;
  tourData: ITour[] = [];

  constructor(private tourSerivce: TourService){}

  ngOnInit(): void {
    this.tourSerivce.getTours().subscribe(
      data => {
        this.isLoading = false;
        this.tourData = data.filter((t: { branch: number; }) => t.branch === this.branch)
      }
    )
  }
}
