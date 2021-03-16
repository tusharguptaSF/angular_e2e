import { Injectable } from '@angular/core';
import { ContactModule } from '../model/contact/contact.module';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {tap}from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient,
    private authservice:AuthService) { }

  addContact(contact:ContactModule){
    return this.http.post<ContactModule>("http://localhost:3000/api/v1/contacts",contact,{
      headers: new HttpHeaders().set('Authorization',`Bearer ${this.authservice.getToken()}`)
  }).pipe(tap(uploadedContact =>{
    console.log("uploaded contact",uploadedContact);
  }))
}
    // .pipe(tap(contact => {
    //   console.log(contact);
    // }))

  getAllContacts(){
    return this.http.get<ContactModule[]>("http://localhost:3000/api/v1/contacts",{
      headers: new HttpHeaders().set('Authorization',`Bearer ${this.authservice.getToken()}`)
  })
}

  // getContactById(id:string){
  //   const contact = this.http.get<ContactModule>(`http://localhost:3000/conatct/${id}`)
  // }
}
