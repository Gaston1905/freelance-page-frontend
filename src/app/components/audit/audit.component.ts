import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent {

  scroll(el:HTMLElement){
    el.scrollIntoView()
  }

  constructor( ) {}

}
