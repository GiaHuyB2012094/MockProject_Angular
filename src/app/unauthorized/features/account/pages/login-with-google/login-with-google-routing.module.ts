import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWithGoogleComponent } from './login-with-google.component';

const routes: Routes = [{ path: '', component: LoginWithGoogleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginWithGoogleRoutingModule { }
