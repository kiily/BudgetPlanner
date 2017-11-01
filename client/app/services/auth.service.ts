import { Observable } from 'rxjs/Rx';
import { User } from './../models/user.model';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  constructor(private http : Http) {

    
   }

   signup(user : User){
     //Pass the user to the body of the request in JSON format
     const body = JSON.stringify(user);
     //Add request headers
     const headers = new Headers({'Content-Type': 'application/json'});
     return this.http.post('http://localhost:3000/user', body, {headers: headers})
    .map( (response : Response) => response.json())
    .catch((error : Response) => {
      console.log(error);
      return Observable.throw(error.json());
   });
  }

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
