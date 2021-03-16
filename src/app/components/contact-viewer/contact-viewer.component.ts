import { Component, OnInit, Input } from '@angular/core';
import { ContactModule } from 'src/app/model/contact/contact.module';
import { ContactService } from '../../service/contact.service';
@Component({
  selector: 'app-contact-viewer',
  templateUrl: './contact-viewer.component.html',
  styleUrls: ['./contact-viewer.component.css']
})
export class ContactViewerComponent implements OnInit {
  @Input()
  contactList: Array<ContactModule> = [];

  constructor(private contactService:ContactService) { 
    //   this.contactService.getAllContacts().subscribe(res => {
    //   console.log(`contact ${res}`);
    //   this.contactList = res;
    // })
  }

  ngOnInit(): void {
  }

}
