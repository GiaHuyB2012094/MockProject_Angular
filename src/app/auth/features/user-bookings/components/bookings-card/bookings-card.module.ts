import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsCardComponent } from './bookings-card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BookingsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    BookingsCardComponent
  ],
})
export class BookingsCardModule { }
