import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  apiUrl:string = "https://969rgz78f9.execute-api.us-east-1.amazonaws.com/dev";
  users;
  constructor(private http:HttpClient) { }

  getAllUsers(){
    let dir = this.apiUrl + "/api/user";
    this.http.get<any>(dir).subscribe(data=>{
      this.users = data;
    });
  }

}
