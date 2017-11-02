import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user.model";


/*This class constructs the login component which includes the login form and method */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
    //Construct form in ngOnInit to reduce constructor overhead
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9]*@[a-zA-Z0-9]*.[a-z]{3}")
       ]),
      password: new FormControl('', Validators.required)
      
    })
  }

  /*This method initiates the sign up process by passing the login form values
  to the authService which communicates with the backend. It also sets the user's token on the browser
  provided that login is successful */
  login(){
    //extract form values
    let email = this.loginForm.controls.email.value;
    let password = this.loginForm.controls.password.value;

    //create user object
    let user = new User(email, password);
    
    this.authService.login(user).subscribe(
      data => {
        //retrieve token and userId from the data
        //store locally
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        this.router.navigateByUrl('/budgets-page');
      },
      error => console.error(error)
    );
    this.loginForm.reset();
 
  }

}
