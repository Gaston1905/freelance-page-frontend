import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWorkshopComponent } from './form-workshop.component';

describe('FormWorkshopComponent', () => {
  let component: FormWorkshopComponent;
  let fixture: ComponentFixture<FormWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWorkshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
