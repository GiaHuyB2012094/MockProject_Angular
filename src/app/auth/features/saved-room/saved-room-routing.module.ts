import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedRoomComponent } from './saved-room.component';

const routes: Routes = [
  {
    path: '',
    component: SavedRoomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedRoomRoutingModule { }
