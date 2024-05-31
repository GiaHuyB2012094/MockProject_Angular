import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SwitchThemeModeModule } from 'src/app/shared/components/buttons/switch-dark-light-mode/switch-theme-mode/switch-theme-mode.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SwitchThemeModeModule,
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
