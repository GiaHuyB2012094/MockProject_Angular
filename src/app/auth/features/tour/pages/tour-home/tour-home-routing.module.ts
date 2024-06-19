import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourHomeComponent } from './tour-home.component';

const routes: Routes = [
  {
    path: '',
    component: TourHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourHomeRoutingModule { }
