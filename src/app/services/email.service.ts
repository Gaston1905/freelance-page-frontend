import { systemForm } from './../model/system.form.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  API_URL = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  sendMail(data: systemForm) {
    return this.http.post(`${this.API_URL}/send`, data)
  }


}
