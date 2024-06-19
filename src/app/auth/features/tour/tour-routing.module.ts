import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourComponent } from './tour.component';

const routes: Routes = [
  {
    path: '',
    component: TourComponent,
    children: [
      { path: '', redirectTo: 'tour-home', pathMatch: 'full'},
      {
        path: 'tour-home',
        loadChildren: () => import('./pages/tour-home/tour-home.module').then(m => m.TourHomeModule),
      },
      {
        path: 'tour-detail/:id',
        loadChildren: () => import('./pages/tour-detail/tour-detail.module').then(m => m.TourDetailModule),
      },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
