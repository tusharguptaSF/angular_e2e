import { Component, OnInit, Input } from '@angular/core';
import { ContactModule } from 'src/app/model/contact/contact.module';
import { RouterService } from 'src/app/service/router.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  @Input() 
  contact:ContactModule = new ContactModule() ;

  constructor(private routerService:RouterService){}

  ngOnInit(): void {
  }
  editContact(){
    // console.log("edit the contact");
    
    this.routerService.routeToEdit(this.contact.id);
  }

}
