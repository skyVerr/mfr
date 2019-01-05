import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:Contact;
  customFields: any[];

  constructor(
    private activateRoute: ActivatedRoute,
    private contactService: ContactService
  ) {
    this.customFields = new Array();
   }

  async ngOnInit() {
    try {
      const contact_id = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
      this.contact = await this.contactService.fetchContact(contact_id).toPromise();
      this.customFields = await this.contactService.fetchCustomFieldsByContact(this.contact).toPromise();
    } catch (error) {

    }
  }

}
