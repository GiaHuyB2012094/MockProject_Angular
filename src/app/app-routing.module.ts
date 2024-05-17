import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UnAuthLayoutComponent } from "./core/layouts/un-auth-layout/un-auth-layout.component";
import { AuthLayoutComponent } from "./core/layouts/auth-layout/auth-layout.component";

const routes : Routes = [
    // {
    //     path: '',
    //     component: UnAuthLayoutComponent,
    //     children: [
    //         {
    //           path: '',
    //           loadChildren: () => import('./unauthorized/unauthorized.module').then(m => m.UnauthorizedModule),
    //         },
    //       ],
    // },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
      path: '',
      component: UnAuthLayoutComponent,
      children: [
          {
            path: 'account',
            loadChildren: () => import('./unauthorized/unauthorized.module').then(m => m.UnauthorizedModule),
          },
        ],
  },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [
          {
            path: '',
            loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
          },
        ],
  }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}