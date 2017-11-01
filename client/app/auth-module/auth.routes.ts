import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

export const authRoutes : Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
]