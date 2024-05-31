import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TextInputGroupModule } from './form-group/text-input-group/text-input-group.module';
import { ButtonModule } from './buttons/button/button.module';
import { ToastModule } from './toast/toast.module';
import { SelectListModule } from './form-group/select-list/select-list.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { LoaderModule } from './loader/loader.module';
import { SelectDropdownModule } from './form-group/select-dropdown/select-dropdown.module';
import { MultiSelectModule } from './form-group/multi-select/multi-select.module';
import { CancelButtonsModule } from './buttons/cancel-buttons/cancel-buttons.module';
import { SwitchThemeModeModule } from './buttons/switch-dark-light-mode/switch-theme-mode/switch-theme-mode.module';

const SHARED_MODULES: Array<Type<any>> = [
  TextInputGroupModule,
  ButtonModule,
  CancelButtonsModule,
  ToastModule,
  SelectListModule,
  BreadcrumbModule,
  LoaderModule,
  SelectDropdownModule,
  MultiSelectModule,
  SwitchThemeModeModule,
];
const MODULES: Array<Type<any>> = [CommonModule, FormsModule, RouterModule];

@NgModule({
  imports: [MODULES],
  declarations: [
  ],
  exports: [...SHARED_MODULES],
})
export class SharedComponentsModule {}
