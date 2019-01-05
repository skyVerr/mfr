import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  customFields:any[];

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {
    this.customFields = new Array();
   }

  ngOnInit() {
  }

  async onSubmit(f:NgForm){
    if(!this.validate(f)){
      try {
        let newContact: Contact = await this.contactService.createContact(f.value).toPromise();

        let temp = {
          contact_id: newContact.contact_id,
          custom: this.customFields
        };

        if(this.customFields.length != 0){
          await this.contactService.addCustomFields(temp).toPromise();
        }

        const result = await Swal({
          position: 'top-end',
          type: 'success',
          title: 'Contact has been saved',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'View contact',
          timer: 4000
        });

        if(result.value){
          this.router.navigateByUrl(`/contacts/${newContact.contact_id}`);
        }

        f.reset();
        this.customFields = new Array();
                
      } catch (error) {
        console.log(error);
        Swal({
          type: 'error',
          text: error.message
        });
      }
    } else {
      Swal({
        type: 'error',
        text: 'Atleast one name is required'
      });
    }
  }

  private validate(f:NgForm):boolean{
    return ((f.value.firstname.trim() === "" && f.value.middlename.trim() === "") && 
    (f.value.lastname.trim() === "" && f.value.nickname.trim() === ""));
  }

  addCustom(field,value){
    this.customFields.push({field: field["value"],value: value["value"]});
    value.value = "";
    field.value = "";
    field.focus();
  }

  handleEnterKeyPress($event){
    return false;
  }

}
