import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login.component';
import {NotAccessComponent} from './not-access.component';
import {RegisterComponent} from './register.component';
import {NotFoundComponent} from './not-found.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'not-access', component: NotAccessComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
  static components = [
    LoginComponent,
    RegisterComponent,
    NotAccessComponent,
    NotFoundComponent
  ];
}
