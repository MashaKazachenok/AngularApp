import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from './authentication.service';

@NgModule({
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    AuthRoutingModule.components
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthModule {
}
