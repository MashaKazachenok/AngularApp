import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlertService} from './services/alert.service';
import {UserService} from './services/user.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {fakeBackendProvider} from './helpers/fake-backend';
import {GuardModule} from './guards/guard.module';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    GuardModule,
  ],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    fakeBackendProvider,
    AlertService, UserService,
    FilterPipe,
  ],
})
export class CoreModule {
}
