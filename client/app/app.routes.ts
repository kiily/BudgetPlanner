import { AuthComponent } from './auth-module/auth/auth.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BudgetsPageComponent } from './budget-module/budgets-page/budgets-page.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

//This constants holds the configuration for all the necessary routes within the application
export const routes: Routes = [
    { path: '', component: LandingPageComponent, loadChildren: './auth-module/auth.module#AuthModule'},
    { path: 'budgets-page', component: BudgetsPageComponent }
];
