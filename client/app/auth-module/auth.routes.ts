import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

//currently not in use
export const authRoutes : Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
]