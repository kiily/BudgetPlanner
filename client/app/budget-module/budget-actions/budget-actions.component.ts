import { BudgetService } from './../../services/budget.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Budget } from '../../models/budget.model';

@Component({
  selector: 'app-budget-actions',
  templateUrl: './budget-actions.component.html',
  styleUrls: ['./budget-actions.component.scss']
})
export class BudgetActionsComponent implements OnInit {

  addBudgetForm : FormGroup;
  
  constructor(private budgetService : BudgetService) { }

  ngOnInit() {
    this.addBudgetForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });

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
