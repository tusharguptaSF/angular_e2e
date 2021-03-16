import { Injectable } from '@angular/core';
import { User } from '../model/user';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  authenticateUser(user:User){
    return this.http.post("http://localhost:3000/auth/v1",user);
  }
  isAuthenticatedUser(){
    return this.http.post('http://localhost:3000/auth/v1/isAuthenticated',{},{
      headers: new HttpHeaders().set('Authorization',`Bearer ${this.getToken()}`)
    })
  }
  addToken(data:any){
    localStorage.setItem("token",data.token);
  }
  getToken(){
    return localStorage.getItem("token");
  }
}
