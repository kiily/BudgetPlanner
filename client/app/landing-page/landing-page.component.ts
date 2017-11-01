import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit() {
    //only show the auth part if the user is not logged in
    

  }

  isLoggedIn(){
    //Retrieve the boolean for the auth state to manipulate DOM
    return this.authService.isLoggedIn();
  }

}
