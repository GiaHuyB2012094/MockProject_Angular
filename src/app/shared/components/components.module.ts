import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TextInputGroupComponent } from "./form-group/text-input-group/text-input-group.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

const SHARED_COMPONENTS: Array<any> = [
    TextInputGroupComponent
]
const SHARED_MODULES: Array<any> = [
    CommonModule,
    FormsModule,
    RouterModule,
]

@NgModule({
  imports: [...SHARED_MODULES],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
  })

export class SharedComponentsModule {}