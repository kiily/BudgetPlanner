import { AuthComponent } from './auth-nav/auth.component';
import { BudgetModule } from './budget-module/budget.module';
import { AuthModule } from './auth.module/auth.module';
import { BudgetService } from './services/budget.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AuthComponent,
    BudgetDetailComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AuthModule,
    BudgetModule,
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
