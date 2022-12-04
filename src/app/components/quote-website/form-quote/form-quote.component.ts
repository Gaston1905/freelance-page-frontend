import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { QuoteForm } from './../../../model/quote.form.interface';
import { EmailService } from './../../../services/email.service';

import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';

@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.scss']
})
export class FormQuoteComponent {

  form!: FormGroup;
  sweetalert: AlertsComponent = new AlertsComponent;

  constructor(
    private emailSVC: EmailService,
    private formBuilder: FormBuilder
  ) {

    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      nameBusiness: new FormControl('', Validators.required),
      personal: new FormControl(false),
      commercial: new FormControl(false),
      account: new FormControl('', Validators.required),
      simplePage: new FormControl(false),
      about: new FormControl(false),
      pagePerService: new FormControl(false),
      pageServices: new FormControl(false),
      formContact: new FormControl(false),
      eCommerce: new FormControl(false),
      eLearning: new FormControl(false),
      blog: new FormControl(false),
      pageLinks: new FormControl(false),
      buyDigitalProducts: new FormControl(false),
      loginAndEditFields: new FormControl(false),
      othersOptions: new FormControl(''),
      servicesBusiness: new FormControl('', Validators.required),
      payment: new FormControl(''),
      domain: new FormControl(false),
      logo: new FormControl(false),
      images: new FormControl(false),
      hosting: new FormControl(false),
      paletteColour: new FormControl(false),
      texts: new FormControl(false),
      reference: new FormControl('', Validators.required),
      others: new FormControl('')
    })
  }

  dataQuote() {

    const quoteData: QuoteForm = this.form.value;

    if(this.form.valid) {
      this.sweetalert.ChargeAlert();
      this.emailSVC.sendQuoteForm(quoteData).subscribe((data) => {
        this.sweetalert.SuccessAlert();
        this.form.reset();
      })
    } else{
      this.sweetalert.IncompletDataAlert();
    }
  }

}
