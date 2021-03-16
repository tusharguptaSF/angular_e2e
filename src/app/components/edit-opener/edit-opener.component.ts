import { Component, OnInit } from '@angular/core';
import {identifierModuleUrl} from '@angular/compiler';
// import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { RouterService} from '../../service/router.service';
import {ContactEditDialogComponent} from '../contact-edit-dialog/contact-edit-dialog.component';



@Component({
  selector: 'app-edit-opener',
  templateUrl: './edit-opener.component.html',
  styleUrls: ['./edit-opener.component.css']
})
export class EditOpenerComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute,
              private routerService : RouterService) { 
    // console.log("edit opener");
    let id = this.activatedRouter.snapshot.params.contactId;
    console.log("id = ",id);
    routerService.routeToDashboard()
    // let ref = this.dialog.open(ContactEditDialogComponent,{
    //   data:{
    //     contactId : id
    //   }
    // })
    // ref.afterClosed().subscribe((result:any) => {
    //   routerService.routeToDashboard();
    // })

  }

  ngOnInit(): void {
  }

}
