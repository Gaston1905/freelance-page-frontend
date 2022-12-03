import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteWebsiteComponent } from './quote-website.component';

describe('QuoteWebsiteComponent', () => {
  let component: QuoteWebsiteComponent;
  let fixture: ComponentFixture<QuoteWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
