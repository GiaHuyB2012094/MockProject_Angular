import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnauthorizedRoutingModule } from './unauthorized-routing.module';
import { UnauthorizedComponent } from './unauthorized.component';
import { AccountComponent } from './features/account/account.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UnauthorizedComponent,
  ],
  imports: [
    CommonModule,
    UnauthorizedRoutingModule, RouterModule
  ]
})
export class UnauthorizedModule { }
