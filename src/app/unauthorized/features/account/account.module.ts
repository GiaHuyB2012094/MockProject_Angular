import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountNavBarComponent } from './components/account-nav-bar/account-nav-bar.component';
import { LoginFormComponent } from './container/login-form/login-form.component';
import { SignUpFormComponent } from './container/sign-up-form/sign-up-form.component';


@NgModule({
  declarations: [AccountComponent, AccountNavBarComponent, LoginFormComponent, SignUpFormComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
