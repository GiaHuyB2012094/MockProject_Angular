import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    AvatarComponent
  ],
})
export class AvatarModule { }
