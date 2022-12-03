import { systemForm } from './../../../model/system.form.interface';
import { EmailService } from './../../../services/email.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-system',
  templateUrl: './form-system.component.html',
  styleUrls: ['./form-system.component.scss']
})
export class FormSystemComponent implements OnInit {

  form!: FormGroup;
  private url = "http://localhost:3000"

  constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private emailSVC: EmailService
    ) {

    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      personal: new FormControl(false),
      comercial: new FormControl(false),
      last_name: new FormControl('', Validators.required)
    })

  }

  ngOnInit(): void {

  }



  dataMail() {
    debugger
    const data: systemForm = {
      name: this.form.value.name,
      message: this.form.value.message,
      email: this.form.value.email,
      personal: this.form.value.personal,
      comercial: this.form.value.comercial,
      last_name: this.form.value.text
    }
    this.emailSVC.sendMail(data).subscribe((data) => {
      console.log(data)
    })
  }

}
