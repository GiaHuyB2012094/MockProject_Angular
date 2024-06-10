import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBookingsComponent } from './user-bookings.component';

const routes: Routes = [
  {
    path: '',
    component: UserBookingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBookingsRoutingModule { }
