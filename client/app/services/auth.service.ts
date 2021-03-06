import { Observable } from 'rxjs/Observable';
import { User } from './../models/user.model';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*This class provides the methods to send HTTP requests to the backend to deal with authentication-related operations.
This includes: signup, login, checking whether the user is logged in */
@Injectable()
export class AuthService {

  constructor(private http : Http) {

    
   }

   //This method sends a post request to sign up the user
   signup(user : User){
     //Pass the user to the body of the request in JSON format
     const body = JSON.stringify(user);
     //Add request headers
     const headers = new Headers({'Content-Type': 'application/json'});
     return this.http.post('http://localhost:3000/user', body, {headers: headers})
    .map( (response : Response) => response.json())
    .catch((error : Response) => {
      return Observable.throw(error.json());
   });
  }

  //This method sends a post request to log in the user
  login(user : User){
   //Pass the user to the body of the request in JSON format
   const body = JSON.stringify(user);
   //Add request headers
   const headers = new Headers({'Content-Type': 'application/json'});
   return this.http.post('http://localhost:3000/user/login', body, {headers: headers})
   .map( (response : Response) => response.json())
   .catch((error : Response) => {
     console.log(error);
     return Observable.throw(error.json());
  });
  }


  //Check whether the user is authenticated
  isLoggedIn(){
    //use the token as proof
    return localStorage.getItem('token') != null;
  }
}
