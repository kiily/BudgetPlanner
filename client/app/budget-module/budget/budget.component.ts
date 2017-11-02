import { Budget } from '../../models/budget.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  @Input() budget : Budget;

  constructor() { }

  ngOnInit() {
  }

  selectBudget(budget : Budget){
    console.log(this.budget);
  }
}
