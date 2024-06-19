import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourDetailComponent } from './tour-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TourDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourDetailRoutingModule { }
