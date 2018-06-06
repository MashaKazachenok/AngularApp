import {NgModule} from '@angular/core';

import {SettingsGuard} from './settings.guard';
import {AuthGuard} from './auth.guard';

@NgModule({
  imports: [],
  declarations: [],
  providers: [SettingsGuard, AuthGuard]
})

export class GuardModule {
}
