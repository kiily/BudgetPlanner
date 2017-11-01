import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthComponent } from './auth-nav/auth.component';
import { BudgetsPageComponent } from './budget-module/budgets-page/budgets-page.component';
import { LoginComponent } from './auth.module/login/login.component';
import { SignupComponent } from './auth.module/signup/signup.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

//This constants holds the configuration for all the necessary routes within the application
export const routes: Routes = [
    { path: '', component: LandingPageComponent, children: [
        { path: '', component: LoginComponent},
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent }
    ] },
    { path: 'budgets-page', component: BudgetsPageComponent }
];
