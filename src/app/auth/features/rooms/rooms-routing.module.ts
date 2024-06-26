import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { ConfirmDeactivateGuard } from 'src/app/core/guards/confirm-leave.guard';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    children: [
      {
        path: 'room-detail/:id',
        loadChildren: () => import('./pages/room-detail/room-detail.module').then(m => m.RoomDetailModule),
      },
      {
        path: 'general-rooms',
        loadChildren: () => import('./pages/general-room/general-room.module').then(m => m.GeneralRoomModule),
      }
      ,
      {
        path: 'booking/:id',
        loadChildren: () => import('./pages/booking/booking.module').then(m => m.BookingModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
