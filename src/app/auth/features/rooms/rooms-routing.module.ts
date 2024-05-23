import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
