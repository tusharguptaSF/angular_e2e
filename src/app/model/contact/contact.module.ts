import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ContactModule {
  id:number = 0;
  name:string = "";
  mobile:string = "";
  email:string = ""; 
  // constructor(username:string,phnumber:string){
  //    this.username = username;
  //    this.phnumner = phnumber;
  // }
 }
