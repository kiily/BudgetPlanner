import { BudgetService } from '../../services/budget.service';
import { Budget } from './../../models/budget.model';
import { Component, OnInit } from '@angular/core';

/*This class constructs the Bugdets page, this is specific to each user. It shows the user's budgets (BudgetComponent)
and an overview (BudgetOverviewComponent) and includes a Navbar (NavbarComponent) */
@Component({
  selector: 'app-budgets-page',
  templateUrl: './budgets-page.component.html',
  styleUrls: ['./budgets-page.component.scss']
})
export class BudgetsPageComponent implements OnInit {


  budgets : Budget[] = [];
  selectedBudget : Budget;
  

  //toggles the checkbox to select the budget to delete
  checkboxToggle : boolean = false;
  
  constructor(private budgetService : BudgetService) { }

  ngOnInit() {
    //get the user's budgets upon loading
    this.budgetService.getBudgets().subscribe( (budgets : Budget[]) => {
      this.budgets = budgets;
      console.log(budgets);
    });
  }

  selectBudget(budget){
    console.log(budget);
    this.selectedBudget = budget;
  }

}
