import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../models/api.class';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  createContact(contact): Observable<Contact>{
    return this.http.post<Contact>(Api.URL+'createcontact.php',JSON.stringify(contact));
  }

  addCustomFields(customFields){
    return this.http.post(Api.URL+'createCustomFields.php',JSON.stringify(customFields));
  }

  fetchContact(contact_id):Observable<Contact>{
    return this.http.get<Contact>(Api.URL+'selectContact.php?contact_id='+contact_id);
  }

  fetchCustomFieldsByContact(contact:Contact):Observable<any[]>{
    return this.http.get<any[]>(Api.URL+'selectCustomField.php?contact_id='+contact.contact_id);
  }
  
}
