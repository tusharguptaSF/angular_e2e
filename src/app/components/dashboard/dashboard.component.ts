import { Component, OnInit } from '@angular/core';
import { ContactModule } from 'src/app/model/contact/contact.module';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contactList:Array<ContactModule> = [];

  constructor(private contactService:ContactService) {
    this.contactService.getAllContacts().subscribe(res => {
      console.log(`contact ${res}`);
      this.contactList = res;
    })
   }

  ngOnInit(): void {
  }

}
