import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { UnAuthLayoutComponent } from './core/layouts/un-auth-layout/un-auth-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MockData } from './core/models/classes/mock-data';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { ForbiddenModule } from './forbidden/forbidden.module';
// import ngx-translate and the http loader
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { UserState } from './core/store/states/user.state';
import { LangState } from './core/store/states/language.state';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ThemeModule } from './Theme/theme.module';
import { lightTheme } from './Theme/light.theme';
import { darkTheme } from './Theme/dark.theme';
// import { TranslationModule } from './translation/translation.module';


export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
const MODULES = [
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
    NgxsModule.forRoot([UserState, LangState]),
    NgxsReduxDevtoolsPluginModule.forRoot()
]
@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    UnAuthLayoutComponent,
  ],
  imports: [
    ...MODULES,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


