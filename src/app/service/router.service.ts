import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }
  routeToDashboard(){
    this.router.navigate(['home']);
  }
  routeToLogin(){
    this.router.navigate(['login'])
  }
  
  routeToEdit(contactId:any){
    this.router.navigate(['home',{
      outlets:{
        editoutlet:['contact','edit',contactId]
      }
    }])
  }
}
