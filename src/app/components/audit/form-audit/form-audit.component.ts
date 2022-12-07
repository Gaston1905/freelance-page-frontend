import { Component  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuditForm } from 'src/app/model/audit.form.interface';
import { EmailService } from 'src/app/services/email.service';

import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';

@Component({
  selector: 'app-form-audit',
  templateUrl: './form-audit.component.html',
  styleUrls: ['./form-audit.component.scss']
})
export class FormAuditComponent  {

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
      account: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
      others: new FormControl('', Validators.required)
    })

  }

  dataAudit() {

    const auditData: AuditForm = this.form.value;



    if(this.form.valid) {
      this.sweetalert.ChargeAlert();
      this.emailSVC.sendAuditForm(auditData).subscribe((data) => {
        this.sweetalert.SuccessAlert();
        this.form.reset();
      })
    } else {
      this.sweetalert.IncompletDataAlert()
    }

    }


}
