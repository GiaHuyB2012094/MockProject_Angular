import { Component, Input } from '@angular/core';
import { TOAST_STATE } from 'src/app/core/constants/toast.constant';
import { TourService } from 'src/app/core/services/api/tour.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-tour-booking-card',
  templateUrl: './tour-booking-card.component.html',
  styleUrls: ['./tour-booking-card.component.scss']
})
export class TourBookingCardComponent {
  @Input()card :any;

  constructor(
    private tourService: TourService,
    private toast: ToastService,
  ){}

  deleteHandle(): void{
    if(this.tourService.deleteToursBooking(this.card.id)){
      this.toast.showToast(
        TOAST_STATE.success,
        'Delete tour booking successfully'
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
