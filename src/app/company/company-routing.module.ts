import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CompanyComponent} from './company.component';
import {AuthGuard} from '../core/guards/auth.guard';

const routes: Routes = [
  {path: 'company', component: CompanyComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
  static components = [
    CompanyComponent
  ];
}
