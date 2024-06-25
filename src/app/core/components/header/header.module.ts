import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SwitchThemeModeModule } from 'src/app/shared/components/buttons/switch-dark-light-mode/switch-theme-mode/switch-theme-mode.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AvatarModule } from '../avatar/avatar.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SwitchThemeModeModule,
    SharedModule,
    AvatarModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
