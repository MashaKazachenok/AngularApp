import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './components/login.component';
import {NotAccessComponent} from './components/not-access.component';
import {RegisterComponent} from './components/register.component';
import {NotFoundComponent} from './components/not-found.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'not-access', component: NotAccessComponent},
  {path: '**', component: NotFoundComponent}
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
