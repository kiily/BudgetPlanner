import { BudgetsPageComponent } from './budgets-page/budgets-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

//This constants holds the configuration for all the necessary routes within the application
export const routes : Routes = [
    { path: '', component: AppComponent},
    { path: 'home', component: AppComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent },
    { path: 'budgets-page', component: BudgetsPageComponent }
];
