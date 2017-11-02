import { Component, OnInit } from '@angular/core';

/*This class constructs the navbar used in the budgets-module */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  /*Note that the Navbar is only used in the Budgets and thus is included in the BudgetModule */
  constructor() { }

  ngOnInit() {
  }

}
