import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "./components/components.module";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

const SHARED_MODULES = [
    SharedComponentsModule,
    FormsModule,
    RouterModule,
  ]

@NgModule({
    imports: [...SHARED_MODULES],
    exports: [...SHARED_MODULES],
  })
export class SharedModule {}