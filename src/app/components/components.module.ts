import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { FormSystemComponent } from './system/form-system/form-system.component';
import { SystemComponent } from './system/system.component';
import { FormQuoteComponent } from './quote-website/form-quote/form-quote.component';
import { QuoteWebsiteComponent } from './quote-website/quote-website.component';
import { FormAuditComponent } from './audit/form-audit/form-audit.component';
import { AuditComponent } from './audit/audit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AuditComponent,
    FormAuditComponent,
    QuoteWebsiteComponent,
    FormQuoteComponent,
    SystemComponent,
    FormSystemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    AuditComponent,
    FormAuditComponent,
    QuoteWebsiteComponent,
    FormQuoteComponent,
    SystemComponent,
    FormSystemComponent,
  ]
})
export class ComponentsModule { }
