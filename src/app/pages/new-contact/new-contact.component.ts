import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  customFields:any[];

  constructor(
    private contactService: ContactService
  ) {
    this.customFields = new Array();
   }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
    this.contactService.createContact(f.value)
      .subscribe(success=>{

      },error=>{
        console.log(error);
      });
  }

  addCustom(field,value){
    this.customFields.push({field,value});
  }

}
