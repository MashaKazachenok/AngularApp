import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {fakeBackendProvider} from './helpers';

import {AppComponent} from './app.component';
import {JwtInterceptor} from './helpers';

import {CoreModule} from './core/core.module';
import {HomeModule} from './home/home.module';
import {AuthModule} from './auth/auth.module';
import {SettingsModule} from './settings/settings.module';

@NgModule({
  imports: [
    CoreModule,
    HomeModule,
    AuthModule,
    SettingsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
