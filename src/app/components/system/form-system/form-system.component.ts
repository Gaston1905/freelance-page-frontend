import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { systemForm } from './../../../model/system.form.interface';
import { EmailService } from './../../../services/email.service';

@Component({
  selector: 'app-form-system',
  templateUrl: './form-system.component.html',
  styleUrls: ['./form-system.component.scss']
})
export class FormSystemComponent {

  form!: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private emailSVC: EmailService
    ) {

    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      personal: new FormControl(false),
      comercial: new FormControl(false),
      others: new FormControl('', Validators.required)
    })

  }

  dataSystem() {
    const systemData: systemForm = {
      name: this.form.value.name,
      last_name: this.form.value.last_name,
      email: this.form.value.email,
      personal: this.form.value.personal,
      comercial: this.form.value.comercial,
      others: this.form.value.others
    }
    this.emailSVC.sendSystemForm(systemData).subscribe((data) => {
      console.log(data)
    })
  }

}
