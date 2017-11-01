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

  budgets = [new Budget("helllo", new Date(2017, 11, 1), 122, 90 ), new Budget("hel000o",new Date("29/10/2017"), 200, 100 ), new Budget("helao",new Date("29/10/2017"), 50, 40 )];
  selectedBudget : Budget;
  
  addBudgetForm : FormGroup;

  //toggles the checkbox to select the budget to delete
  checkboxToggle : boolean = false;
  constructor(private budgetService : BudgetService) { }

  ngOnInit() {
    this.addBudgetForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  selectBudget(budget){
    console.log(budget);
    this.selectedBudget = budget;
  }

  addBudget(){
    let budgetName = this.addBudgetForm.controls.name.value;
    let now = new Date();

    // this.budgetService.addBudget();

  }

  editBudget(){
    
  }

  deleteBudget(){

  }
}
