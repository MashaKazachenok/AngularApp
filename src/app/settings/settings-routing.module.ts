import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SettingsComponent} from './settings.component';
import {SettingsGuard} from '../core/guards/settings.guard';

const routes: Routes = [
  {path: 'settings', component: SettingsComponent, canActivate: [SettingsGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
  static components = [
    SettingsComponent
  ];
}
