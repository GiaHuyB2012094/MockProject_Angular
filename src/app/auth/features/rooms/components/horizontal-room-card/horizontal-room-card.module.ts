import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalRoomCardComponent } from './horizontal-room-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { CurrencyVNDPipe } from 'src/app/shared/pipes/currency-vnd.pipe';



@NgModule({
  declarations: [
    HorizontalRoomCardComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,

  ],
  exports: [
    HorizontalRoomCardComponent
  ],
})
export class HorizontalRoomCardModule { }
