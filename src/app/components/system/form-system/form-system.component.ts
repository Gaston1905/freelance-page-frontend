import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { systemForm } from './../../../model/system.form.interface';
import { EmailService } from './../../../services/email.service';

import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';

@Component({
  selector: 'app-form-system',
  templateUrl: './form-system.component.html',
  styleUrls: ['./form-system.component.scss']
})
export class FormSystemComponent {

  form!: FormGroup;
  sweetalert: AlertsComponent = new AlertsComponent;

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

    const systemData: systemForm = this.form.value;

    if(this.form.valid) {
      this.sweetalert.ChargeAlert();
      this.emailSVC.sendSystemForm(systemData).subscribe((data) => {
        this.sweetalert.SuccessAlert();
        this.form.reset();
      })
    } else {
      this.sweetalert.IncompletDataAlert()
  }
  }

}
