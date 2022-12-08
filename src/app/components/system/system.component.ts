import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  scroll(el:HTMLElement){
    el.scrollIntoView()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
