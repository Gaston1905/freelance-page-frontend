import { QuoteForm } from './../../../model/quote.form.interface';
import { EmailService } from './../../../services/email.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.scss']
})
export class FormQuoteComponent {

  form!: FormGroup;

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

    const quoteData: QuoteForm = {
      name: this.form.value.name,
      last_name: this.form.value.last_name,
      email: this.form.value.email,
      nameBusiness: this.form.value.nameBusiness,
      personal: this.form.value.personal,
      commercial: this.form.value.commercial,
      account: this.form.value.account,
      simplePage: this.form.value.simplePage,
      about: this.form.value.about,
      pagePerService: this.form.value.pagePerService,
      pageServices: this.form.value.pageServices,
      formContact: this.form.value.formContact,
      eCommerce: this.form.value.eCommerce,
      eLearning: this.form.value.eLearning,
      blog: this.form.value.blog,
      pageLinks: this.form.value.pageLinks,
      buyDigitalProducts: this.form.value.buyDigitalProducts,
      loginAndEditFields: this.form.value.loginAndEditFields,
      othersOptions: this.form.value.othersOptions,
      servicesBusiness: this.form.value.servicesBusiness,
      payment: this.form.value.payment,
      domain: this.form.value.domain,
      logo: this.form.value.logo,
      images: this.form.value.images,
      hosting: this.form.value.hosting,
      paletteColour: this.form.value.paletteColour,
      texts: this.form.value.texts,
      reference: this.form.value.reference,
      others: this.form.value.others
    }

    console.log(quoteData)

    this.emailSVC.sendQuoteForm(quoteData).subscribe((data) => {
      console.log(data)
    })
  }

}
