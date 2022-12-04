import { Component  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuditForm } from 'src/app/model/audit.form.interface';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-form-audit',
  templateUrl: './form-audit.component.html',
  styleUrls: ['./form-audit.component.scss']
})
export class FormAuditComponent  {

  form!: FormGroup;

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

    const auditData: AuditForm = {
      name: this.form.value.name,
      last_name: this.form.value.last_name,
      email: this.form.value.email,
      account: this.form.value.account,
      website: this.form.value.website,
      others: this.form.value.others
    }

    this.emailSVC.sendAuditForm(auditData).subscribe((data) => {
      console.log(data)
    })
  }

}
