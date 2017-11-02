import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from './../../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

/*This class constructs the sign-up component which includes the signup form and method */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
    //initialize the form group
    this.signupForm= new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9]*@[a-zA-Z0-9]*.[a-z]{3}")
       ]),
      password: new FormControl('', Validators.required),
      passwordRepeat:  new FormControl('', Validators.required)
      

    })
  }


  /*This method initiates the sign up process by passing the sign up form values
  to the authService which communicates with the backend */
  signup(){
    
    //extract values from form 
    let firstname = this.signupForm.controls.firstname.value;
    let lastname = this.signupForm.controls.lastname.value;
    let email = this.signupForm.controls.email.value;
    let password = this.signupForm.controls.password.value;
    let passwordRepeat = this.signupForm.controls.passwordRepeat.value;


    /*If passwords match user is allowed to sign up */
    if(password === passwordRepeat){
      //create User object
      let newUser = new User(email, password, firstname, lastname);
 
      this.authService.signup(newUser).subscribe(
        data => console.log(data),
        error => console.error(error)
      );
      //reset form
      this.signupForm.reset();
      //navigate to login child route
      this.router.navigate(['./login']);
    }

  }
}
