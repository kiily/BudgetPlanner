import { BudgetActionsComponent } from './budget-actions/budget-actions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BudgetsPageComponent } from './budgets-page/budgets-page.component';
import { BudgetOverviewComponent } from './budget-overview/budget-overview.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';
import { NgModule } from "@angular/core";


@NgModule({
    declarations: [
        BudgetDetailComponent,
        BudgetOverviewComponent,
        BudgetsPageComponent,
        BudgetActionsComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        
    ]
})
export class BudgetModule{}