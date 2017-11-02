import { Observable } from 'rxjs/Observable';
import { Budget } from './../models/budget.model';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*This class provides the methods to send HTTP requests to the backend to deal with budget-related operations.
This includes all budget CRUD operations */
@Injectable()
export class BudgetService {
  //keeps an internal array of the budgets
  budgets : Budget[] =[];


  constructor(private http : Http) { }

  getBudgets(){
    return this.http.get('http://localhost:3000/budget')
    .map( (response : Response) => {
      //extract the user's budgets
    let budgets = response.json().obj;

    //transform the budgets to match the front end model
    let transformedBudgets : Budget[] =[];
    for(let budget of budgets){
      console.log(budget);
      transformedBudgets.push(new Budget(
        budget.name,
        budget.date,
        budget._id,
        budget.user._id
      ));
    }
    //update the internal budgets array
    this.budgets = transformedBudgets;
   
    return transformedBudgets;
    }).catch( (error : Response) => {
      //additional error handling
      console.log(error);
      console.log('here');
      return Observable.throw(error.json());
    });

  }

  addBudget(budget : Budget){

    const body = JSON.stringify(budget);
    const headers = new Headers({'Content-Type':'application/json'});

    //retrieve the token to add to the query
    const token = localStorage.getItem('token') ? '?token='+localStorage.getItem('token') : '';
    console.log("adding budget");
    //retrieve the jwt token with the user info from local storage
    return this.http.post('http://localhost:3000/budget'+token, body, {headers: headers})
    .map((response : Response) => {
      let result = response.json();

      //create a new budget object to add
      let budget = new Budget(result.obj.name, result.obj.date, result.obj.user._id);
      this.budgets.push(budget);
      return budget;
    }).catch((error : Response) => {
      //needs further error handling logic
      return Observable.throw(error.json());
    });
    
  }

  updateBudget(budget : Budget){

  }

  deleteBudget(budget : Budget){
    
  }
}
