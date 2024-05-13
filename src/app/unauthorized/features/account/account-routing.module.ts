import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      { 
        path: 'signup',
        loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) 
      },
      { 
        path: 'forgot-password', 
        loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) 
      },
      { 
        path: 'login-with-google', 
        loadChildren: () => import('./pages/login-with-google/login-with-google.module').then(m => m.LoginWithGoogleModule) 
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
