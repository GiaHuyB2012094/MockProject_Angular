import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { ConfirmDeactivateGuard } from 'src/app/core/guards/confirm-leave.guard';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    canDeactivate: [ConfirmDeactivateGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
