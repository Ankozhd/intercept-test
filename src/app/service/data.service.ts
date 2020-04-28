import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { API } from '../config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private api = 'https://localhost:4200/';

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<any> {
    return this.httpClient.get(API + 'users');
  }

  updateList(id, property, editField): Observable<any> {
    return this.httpClient.post(API + 'update', { id, property, editField });
  }

  addRow(headers): Observable<any> {
    return this.httpClient.post(API + 'addrow', { headers });
  }

  removeRow(id): Observable<any> {
    return this.httpClient.post(API + 'removerow', { id });
  }
}
