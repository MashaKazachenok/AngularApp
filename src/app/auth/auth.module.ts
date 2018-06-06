import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login.component';
import {NotAccessComponent} from './not-access.component';
import {RegisterComponent} from './register.component';
import {NotFoundComponent} from './not-found.component';

@NgModule({
  imports: [AuthRoutingModule],
  declarations: [
    AuthRoutingModule.components,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    NotAccessComponent]
})
export class AuthModule {
}
