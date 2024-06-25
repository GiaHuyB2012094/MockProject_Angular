import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AvatarComponent } from './components/avatar/avatar.component';

const COMPONENTS = [HeaderComponent, AvatarComponent];

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [CommonModule, ...COMPONENTS],
})
export class CoreModule {}
