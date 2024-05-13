import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginWithGoogleRoutingModule } from './login-with-google-routing.module';
import { LoginWithGoogleComponent } from './login-with-google.component';


@NgModule({
  declarations: [
    LoginWithGoogleComponent
  ],
  imports: [
    CommonModule,
    LoginWithGoogleRoutingModule
  ]
})
export class LoginWithGoogleModule { }
