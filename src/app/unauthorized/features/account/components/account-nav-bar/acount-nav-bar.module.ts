import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountNavBarComponent } from './account-nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AccountNavBarComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [AccountNavBarComponent]
})
export class AcountNavBarModule { }
