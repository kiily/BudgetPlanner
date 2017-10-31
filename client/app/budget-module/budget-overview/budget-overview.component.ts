import { Budget } from './../../models/budget.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-overview',
  templateUrl: './budget-overview.component.html',
  styleUrls: ['./budget-overview.component.scss']
})
export class BudgetOverviewComponent implements OnInit {
  @Input() budget : Budget;

  constructor() { }

  ngOnInit() {
  }

}
