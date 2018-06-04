import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { fakeBackendProvider } from './helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { JwtInterceptor } from './helpers';
import { AlertService, AuthenticationService, UserService } from './services';
import { SettingsComponent }   from './settings';
import { HomeComponent }   from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { NotFoundComponent }   from './not-found.component';
import { NotAccessComponent }   from './not-access.component';
import { SettingsGuard }   from './guards';
import { AuthGuard } from './guards';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NotFoundComponent,
        SettingsComponent,
        NotAccessComponent
    ],
    providers:    [
        AlertService,
        SettingsGuard,
        AuthGuard,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        fakeBackendProvider
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
