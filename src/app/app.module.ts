import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {HomeModule} from './home/home.module';
import {SettingsModule} from './settings/settings.module';
import {AuthModule} from './auth/auth.module';
import {CompanyModule} from './company/company.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),

    CoreModule,
    HomeModule,
    SettingsModule,
    CompanyModule,
    AuthModule,

  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
