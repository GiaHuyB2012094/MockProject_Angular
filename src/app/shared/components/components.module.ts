import { CommonModule } from "@angular/common";
import { NgModule, Type } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TextInputGroupModule } from "./form-group/text-input-group/text-input-group.module";
import { ButtonModule } from "./button/button.module";

const SHARED_MODULES: Array<Type<any>> = [
    TextInputGroupModule,
    ButtonModule,
]
const MODULES: Array<Type<any>> = [
    CommonModule,
    FormsModule,
    RouterModule,
]

@NgModule({
    imports: [MODULES],
    declarations: [
  ],
    exports: [...SHARED_MODULES],
  })

export class SharedComponentsModule {}