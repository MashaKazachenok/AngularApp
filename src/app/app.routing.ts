import {Routes, RouterModule} from '@angular/router';

import { SettingsComponent }   from './settings';
import { HomeComponent }   from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { NotFoundComponent }   from './not-found.component';
import { NotAccessComponent }   from './not-access.component';
import { SettingsGuard }   from './guards';
import { AuthGuard } from './guards';

const appRoutes: Routes =[
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'settings', component: SettingsComponent, canActivate: [SettingsGuard]},
    { path: 'not-access', component: NotAccessComponent },
    { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);