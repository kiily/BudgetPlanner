import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BudgetsPageComponent } from './budgets-page/budgets-page.component';
import { AuthComponent } from './auth/auth.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    BudgetsPageComponent,
    AuthComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
