import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'room',
        loadChildren: () => import('./features/rooms/rooms.module').then(m => m.RoomsModule),
      },
      {
        path: 'user-bookings',
        loadChildren: () => import('./features/user-bookings/user-bookings.module').then(m => m.UserBookingsModule),
      },
      {
        path: 'saved-rooms',
        loadChildren: () => import('./features/saved-room/saved-room.module').then(m => m.SavedRoomModule),
      },
      {
        path: 'tour',
        loadChildren: () => import('./features/tour/tour.module').then(m => m.TourModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
