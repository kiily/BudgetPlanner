 import { Budget } from '../../models/budget.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  @Input() budget : Budget;
  @Output() budgetHoverEvt = new EventEmitter<Budget>();

  constructor() { }

  ngOnInit() {
  }

  budgetHover(budget : Budget){
    this.budgetHoverEvt.emit(budget);
  }
}
