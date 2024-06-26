import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "./components/components.module";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CurrencyVNDPipe } from "./pipes/currency-vnd.pipe";
import { TranslateModule } from "@ngx-translate/core";
import { AvatarDirective } from './directives/avatar.directive';

const SHARED_MODULES = [
    SharedComponentsModule,
    FormsModule,
    RouterModule,
  ]

@NgModule({
    imports: [...SHARED_MODULES, TranslateModule],
    exports: [...SHARED_MODULES, CurrencyVNDPipe, TranslateModule,AvatarDirective],
    declarations: [
      CurrencyVNDPipe,
      AvatarDirective
    ],
  })
export class SharedModule {}