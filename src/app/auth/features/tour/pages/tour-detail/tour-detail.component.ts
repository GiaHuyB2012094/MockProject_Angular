import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TOAST_STATE } from 'src/app/core/constants/toast.constant';
import { IBreadcrumb } from 'src/app/core/models/interfaces/IBreadcrumb.interface';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';
import { ITour } from 'src/app/core/models/interfaces/ITour';
import { RoomsService } from 'src/app/core/services/api/rooms.service';
import { TourService } from 'src/app/core/services/api/tour.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent implements OnInit, OnDestroy, AfterViewChecked{
  tourDetail!: ITour;
  isLoading = true;
  toursList: any;
  isOpenModalSuggestHotels = false;
  roomsListByBranch: IRoom[] = [];

  breadcrumbs: IBreadcrumb[] = [
    {label: 'tour', link: '/tour'},
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private tourService: TourService,
    private toast: ToastService,
    private roomService: RoomsService,
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.getTourDetail(Number(params.get('id')))
    })
    this.getTours()
    // this.getRoomsByBranch();
  }
  ngAfterViewChecked(): void {
    console.log(this.tourService.toursBooking)
  }
  ngOnDestroy(): void {
    // when redirective through route (change route) then it called. 
    console.log('destroy')
  }

  getTourDetail = async(id: number) =>{
    await this.tourService.getTourById(id)
      .subscribe(
         (data) => {
          this.tourDetail = data;
          this.isLoading = false;
          this.getRoomsByBranch(data.branch);
          if (this.breadcrumbs.length > 2) {
            this.breadcrumbs.splice(2,1,{label: `${data.name}`, link: `/tour/tour-detail/${data.id}`},)
          } else {
            this.breadcrumbs.push(
              {label: `${data.name}`, link: `/tour/tour-detail/${data.id}`},
            )
          }
        },

      )
  }

  getTours(): void {
    this.tourService.getTours().subscribe(
      data => {this.toursList = data; this.isLoading=false}
    )
  }
  
  getRoomsByBranch(id: number): void {
    this.roomService.getRoomByBranch(id)
      .subscribe(
        data => this.roomsListByBranch = data
      )
  }

  addTourBookingHandle(tour: ITour): void{
    if(this.tourService.addToursBooking(tour)) {
      this.toast.showToast(
        TOAST_STATE.success,
        'Add tour booking successfully'
      );
      this.dismissError();

      setTimeout(()=>this.isOpenModalSuggestHotels = true,500)
      
    } else {
      this.toast.showToast(
        TOAST_STATE.danger,
        'Add tour booking failed'
      );
      this.dismissError();
    }
  }

  private dismissError(): void {
    setTimeout(() => {
      this.toast.dismissToast();
    }, 2000);
  }
}
