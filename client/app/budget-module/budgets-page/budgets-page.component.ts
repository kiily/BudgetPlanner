import { BudgetService } from '../../services/budget.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Budget } from './../../models/budget.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budgets-page',
  templateUrl: './budgets-page.component.html',
  styleUrls: ['./budgets-page.component.scss']
})
export class BudgetsPageComponent implements OnInit {

  budgets : Budget[] = [];
  selectedBudget : Budget;
  
  addBudgetForm : FormGroup;

  //toggles the checkbox to select the budget to delete
  checkboxToggle : boolean = false;
  constructor(private budgetService : BudgetService) { }

  ngOnInit() {
    this.addBudgetForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });

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



  addBudget(){
    let budgetName = this.addBudgetForm.controls.name.value;
    let now = new Date();

    let budget = new Budget(budgetName, now);

    this.budgetService.addBudget(budget).subscribe(
      data => console.log(data),
      error => console.error(error)
    );

  }

  editBudget(){
    
  }

  deleteBudget(){

  }
}
