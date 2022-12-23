import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-workshop',
  templateUrl: './form-workshop.component.html',
  styleUrls: ['./form-workshop.component.scss']
})
export class FormWorkshopComponent implements OnInit {

  form!: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

}
