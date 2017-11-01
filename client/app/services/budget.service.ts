import { Budget } from './../models/budget.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BudgetService {

  constructor(private http : Http) { }

  addBudget(budget : Budget){

    const body = JSON.stringify(budget);
    const headers = new Headers({'Content-Type':'application/json'})

    //retrieve the jwt token with the user info from local storage
    // return this.http.post('./budget')
    
  }

}
