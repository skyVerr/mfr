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
  
}
