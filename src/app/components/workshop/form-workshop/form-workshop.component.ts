import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { workshopForm } from 'src/app/model/workshop.form.interface';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';

@Component({
  selector: 'app-form-workshop',
  templateUrl: './form-workshop.component.html',
  styleUrls: ['./form-workshop.component.scss']
})
export class FormWorkshopComponent implements OnInit {

  form!: FormGroup;
  sweetalert: AlertsComponent = new AlertsComponent;
  disabled = true;

  constructor( private formBuilder: FormBuilder,
               private emailSVC: EmailService
             ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  dataWorkshop() {

    const workshopData: workshopForm = this.form.value;
    this.sweetalert.WorkshopChargeAlert();

    if(this.form.valid) {
      this.emailSVC.sendWorkshopForm(workshopData).subscribe((data) => {
        this.form.reset();
      }
      )
    }
  }

}
