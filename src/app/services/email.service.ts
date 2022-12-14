import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { systemForm } from './../model/system.form.interface';
import { AuditForm } from './../model/audit.form.interface';
import { QuoteForm } from '../model/quote.form.interface';
import { workshopForm } from '../model/workshop.form.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  API_URL = 'https://freelance-backend-vn9p.onrender.com';

  constructor( private http: HttpClient ) { }

  sendSystemForm(systemData: systemForm) {
    return this.http.post(`${this.API_URL}/sendSystem`, systemData);
  }

  sendAuditForm(auditData: AuditForm) {
    return this.http.post(`${this.API_URL}/sendAudit`, auditData);
  }

  sendQuoteForm(quoteData: QuoteForm) {
    return this.http.post(`${this.API_URL}/sendQuote`, quoteData);
  }

  sendWorkshopForm(workshopData: workshopForm) {
    console.log(workshopData)
    return this.http.post(`${this.API_URL}/sendWorkshop`, workshopData);
  }

}
