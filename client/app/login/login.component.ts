import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from "../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
    //Construct form in ngOnInit toreduce constrcutor overhead
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9]*@[a-zA-Z0-9]*.[a-z]{3}")
       ]),
      password: new FormControl('', Validators.required)
      
    })
  }

  login(){
    
    let email = this.loginForm.controls.email.value;
    let password = this.loginForm.controls.password.value;

    let user = new User(email, password);
    
    this.authService.login(user).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
    this.loginForm.reset();
    this.router.navigate(['./budgets-page']);
  }

}
