import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBreadcrumb } from 'src/app/core/models/interfaces/IBreadcrumb.interface';
import { ITour } from 'src/app/core/models/interfaces/ITour';
import { TourService } from 'src/app/core/services/api/tour.service';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent implements OnInit{
  tourDetail!: ITour;
  isLoading = true;

  breadcrumbs: IBreadcrumb[] = [
    {label: 'tour', link: '/tour'},
  ];


  constructor(
    private activatedRoute: ActivatedRoute,
    private tourService: TourService,
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.getTourDate(Number(params.get('id')))
    })
  }

  getTourDate(id: number): void{
    this.tourService.getTourById(id)
      .subscribe({
        next: data => {
          this.tourDetail = data;
          this.isLoading = false;
          this.breadcrumbs.push(
            {label: `${data.name}`, link: `/tour/tour-detail/${data.id}`},
          )
        },
      error: err => console.log(err)

      })
  }
}
