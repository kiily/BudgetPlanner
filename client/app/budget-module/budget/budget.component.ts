import { BudgetService } from '../../services/budget.service';
import { Budget } from './../../models/budget.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  @Input() budget : Budget;
  @Output() budgetHoverEvt = new EventEmitter<Budget>();

  selectedBudget : Budget;

  constructor(private budgetService : BudgetService) { }

  ngOnInit() {
  }

  budgetHover(budget : Budget){
    this.budgetHoverEvt.emit(budget);
  }

  selectBudget(budget : Budget){
    //navigate to the budget detail page and pass the object in the request
  }

  onEdit(){
    //pass the edit event to the budget service so that it can be picked up by another component
    this.budgetService.editBudget(this.budget);
    console.log(this.budget);

  }

  onDelete(){
    this.budgetService.deleteBudget(this.budget).subscribe(
      result => console.log(result)
    )
  }
}
