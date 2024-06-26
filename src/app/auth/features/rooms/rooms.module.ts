import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmDeactivateGuard } from 'src/app/core/guards/confirm-leave.guard';

const MODULES = [SharedModule]
@NgModule({
  declarations: [RoomsComponent],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedModule,
    ...MODULES,
  ],
  providers: [
    ConfirmDeactivateGuard  
  ],
})
export class RoomsModule { }
