import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
/*This is part of the landing page and hence not in the auth-module */
  constructor() { }

  ngOnInit() {
    
  }


}
