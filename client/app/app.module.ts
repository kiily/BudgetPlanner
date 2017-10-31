import { BudgetService } from './services/budget.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth.module/login/login.component';
import { SignupComponent } from './auth.module/signup/signup.component';
import { BudgetsPageComponent } from './budget-module/budgets-page/budgets-page.component';
import { AuthComponent } from './auth.module/auth/auth.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BudgetOverviewComponent } from './budget-module/budget-overview/budget-overview.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    BudgetsPageComponent,
    AuthComponent,
    LandingPageComponent,
    BudgetOverviewComponent,
    BudgetDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    BudgetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
