import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor() { }

  ngOnInit() {
    //Construct form in ngOnInit toreduce constrcutor overhead
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9]*@[a-zA-Z0-9]*.[a-z]{3}")
       ]),
      password: new FormControl('', Validators.required),
      
    })
  }

  login(){

  }

}
