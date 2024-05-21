import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { UnAuthLayoutComponent } from './core/layouts/un-auth-layout/un-auth-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MockData } from './core/models/classes/mock-data';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { ForbiddenModule } from './forbidden/forbidden.module';
@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    UnAuthLayoutComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,  
    RouterModule,
    HttpClientInMemoryWebApiModule.forRoot(MockData, {delay: 500}),
    BrowserAnimationsModule,
    ForbiddenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
