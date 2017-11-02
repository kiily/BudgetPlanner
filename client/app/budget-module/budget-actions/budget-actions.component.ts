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
  budget : Budget;
  isEdit : boolean = false;
  
  constructor(private budgetService : BudgetService) { }

  ngOnInit() {
    //form setup
    this.addBudgetForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });

    //listen to the event emitter and change is edit to true
    this.budgetService.budgetIsEdit.subscribe((budget : Budget) => {
      this.isEdit= true;
      this.budget = budget;
      console.log('actions component');
      console.log(this.budget)
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

    this.addBudgetForm.reset();

  }

  editBudget(){
        //extract the updated value from the form
        this.budget.name = this.addBudgetForm.controls.name.value;
        this.budgetService.updateBudget(this.budget).subscribe(
          result => console.log(result)

        );
        //reset internal budget object
        this.budget = null;
        //toggle is edit boolean
        this.isEdit =false;

  }

  /* Utility method to clear the input field when editing a budget */
  clear(){
    //reset form
    this.addBudgetForm.reset();
    //toggle boolean for edit
    this.isEdit = false;

  }

}
