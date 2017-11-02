import { BudgetService } from './../../services/budget.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Budget } from '../../models/budget.model';


/*This class constructs all the elements that enable the manipulation of budgets. Includes adding, updating and deleting. */
@Component({
  selector: 'app-budget-actions',
  templateUrl: './budget-actions.component.html',
  styleUrls: ['./budget-actions.component.scss']
})
export class BudgetActionsComponent implements OnInit {

  addBudgetForm : FormGroup;
  
  constructor(private budgetService : BudgetService) { }

  ngOnInit() {
    //form setup
    this.addBudgetForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });

  }



  /*This method initiates the process of adding a budget and passes the newly created budget object to the
  auth service that communicates with the backend */
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
