import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralInfoRoomDetailComponent } from './general-info-room-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GeneralInfoRoomDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [GeneralInfoRoomDetailComponent]
})
export class GeneralInfoRoomDetailModule { }
