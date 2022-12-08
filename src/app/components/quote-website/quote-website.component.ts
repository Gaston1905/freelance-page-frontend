import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-website',
  templateUrl: './quote-website.component.html',
  styleUrls: ['./quote-website.component.scss']
})
export class QuoteWebsiteComponent implements OnInit {

  scroll(el:HTMLElement){
    el.scrollIntoView()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
