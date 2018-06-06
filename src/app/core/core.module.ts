import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ AlertService, AuthenticationService, UserService ]
})
export class CoreModule { }
