import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validator, Validators} from '@angular/forms'
import {LoginServiceService} from '../services/login-service.service'
import {Router} from '@angular/router' 
import {AppComponent} from '../app.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm = new FormGroup({
    email : new FormControl ('bankshorn@insuresys.com', Validators.required),
    password : new FormControl ('bankshorn', Validators.required),
  })

  constructor(private userService:LoginServiceService, private router:Router) {
    AppComponent.userIn = "";
   }

  ngOnInit(): void {
    this.userService.getAllUsers();
  }

  validate(form){
    let users = this.userService.users;
    if(users){
      if(users.email == form.email && users.password == form.password){
        AppComponent.userIn = users;
        this.router.navigate(['/home']);
      }else{
        alert("¡Datos incorrectos!");
      }
    }    
  }
}
