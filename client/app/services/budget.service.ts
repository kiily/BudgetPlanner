import { Observable } from 'rxjs/Observable';
import { Budget } from './../models/budget.model';
import { Http, Headers, Response } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*This class provides the methods to send HTTP requests to the backend to deal with budget-related operations.
This includes all budget CRUD operations */
@Injectable()
export class BudgetService {
  //keeps an internal array of the budgets
  budgets : Budget[] =[];
  budgetIsEdit : EventEmitter<Budget> = new EventEmitter<Budget>();

  constructor(private http : Http) { }

  getBudgets(){
    return this.http.get('http://localhost:3000/budget')
    .map( (response : Response) => {
      //extract the user's budgets
    let budgets = response.json().obj;

    //transform the budgets to match the front end model
    let transformedBudgets : Budget[] =[];
    for(let budget of budgets){
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
    
    //retrieve the jwt token with the user info from local storage
    return this.http.post('http://localhost:3000/budget'+token, body, {headers: headers})
    .map((response : Response) => {
      let result = response.json();

      //create a new budget object to add
      let budget = new Budget(result.obj.name, result.obj.date, result.obj._id, result.obj.user._id);
      this.budgets.push(budget);
      return budget;
    }).catch((error : Response) => {
      //needs further error handling logic
      return Observable.throw(error.json());
    });
    
  }

  //Emits an event when the user wants to edit a budget; use internal event emitters
  editBudget(budget:Budget){
    this.budgetIsEdit.emit(budget);
    console.log('service');
    console.log(budget);
  }

  //Send the data to update the budget on the backend
  updateBudget(budget : Budget){
    console.log('update');
    console.log(budget);
    //similar code to add but using patch instead
    const body = JSON.stringify(budget);
    const headers = new Headers({'Content-Type':'application/json'});

    //retrieve the token to add to the query
    const token = localStorage.getItem('token') ? '?token='+localStorage.getItem('token') : '';
    
    //retrieve the jwt token with the user info from local storage
    return this.http.patch('http://localhost:3000/budget/'+budget.budgetId+token, body, {headers: headers})
    .map((response : Response) => {
    response.json();
    }).catch((error : Response) => {
      //needs further error handling logic
      return Observable.throw(error.json());
    });
    

  }

  deleteBudget(budget : Budget){
    //remove from the internal array
    this.budgets.splice(this.budgets.indexOf(budget),1);

    //retrieve token
    const token = localStorage.getItem('token') ? "?token="+localStorage.getItem('token') : "";

    //pass the ID of the budget to the backend
    return this.http.delete('http://localhost:3000/budget/'+budget.budgetId + token)
    .map( (response : Response) => {
      //extract response in json format
      response.json();
    }).catch((error : Response) => {
      //error handling will go here
      return Observable.throw(error.json());
    });
    


  }
}
