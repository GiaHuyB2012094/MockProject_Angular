import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralRoomComponent } from './general-room.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralRoomComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoomRoutingModule { }
