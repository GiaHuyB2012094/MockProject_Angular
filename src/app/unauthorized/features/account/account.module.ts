import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AcountNavBarModule } from './components/account-nav-bar/acount-nav-bar.module';
import { AccountNavBarComponent } from './components/account-nav-bar/account-nav-bar.component';


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AcountNavBarModule,
  ]
})
export class AccountModule { }
