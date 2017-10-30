import { User } from './../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm= new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9]*@[a-zA-Z0-9]*.[a-z]{3}")
       ]),
      password: new FormControl('', Validators.required),
      repeatPassword:  new FormControl('', Validators.required)
      

    })
  }


  signup(){
    
    let firstname = this.signupForm.controls.firstname.value;
    let lastname = this.signupForm.controls.lastname.value;
    let email = this.signupForm.controls.email.value;
    let password = this.signupForm.controls.password.value;
    let passwordRepeat = this.signupForm.controls.passwordRepeat.value;


    /*If passwords match user is allowed to sign up */
    if(password === passwordRepeat){
      //password needs hashing
      let newUser = new User(email, password, firstname, lastname);
      console.log(newUser);
    }

  }
}
