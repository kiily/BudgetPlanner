import { Budget } from './../../models/budget.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budgets-page',
  templateUrl: './budgets-page.component.html',
  styleUrls: ['./budgets-page.component.scss']
})
export class BudgetsPageComponent implements OnInit {

  budgets = [new Budget("helllo","29/10/2017", 100, 200 ), new Budget("hel000o","29/10/2017", 200, 100 ), new Budget("helao","29/10/2017", 50, 40 )];
  selectedBudget : Budget;
  
  constructor() { }

  ngOnInit() {
  }

  selectBudget(budget){
    console.log(budget);
    this.selectedBudget = budget;
  }

}
