import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UnAuthLayoutComponent } from "./core/layouts/un-auth-layout/un-auth-layout.component";

const routes : Routes = [
    {
        path: '',
        component: UnAuthLayoutComponent,
        children: [
            {
              path: '',
              loadChildren: () => import('./unauthorized/unauthorized.module').then(m => m.UnauthorizedModule),
            },
          ],
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}