import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsList:Contact[];
  private url:string;

  constructor(private _http: HttpClient) {
    this.contactsList = new Array<Contact>();
    this.url = environment.api.url;
   }

  getContactsListSize(keywords: string): Observable<number>{
    return this._http.get<number>(`${this.url}/contactos/count?${keywords}`);
  }
  
  getContactsList(keywords: string, order: string = '', start: number = 0, limit: number = 4): Observable<Contact[]> {
    return this._http.get<Contact[]>(`${this.url}/contactos?${keywords}&_sort=${order}&_limit=${limit}&_start=${start}`);
  }
}
