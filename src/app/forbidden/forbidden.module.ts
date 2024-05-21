import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForbiddenRoutingModule } from './forbidden-routing.module';
import { RouterModule } from '@angular/router';
import { ForbiddenComponent } from './forbidden.component';


@NgModule({
  declarations: [ForbiddenComponent],
  imports: [
    CommonModule,
    ForbiddenRoutingModule,
    RouterModule,
  ],
  exports: [ForbiddenComponent]
})
export class ForbiddenModule { }
