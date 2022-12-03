import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuditComponent } from './form-audit.component';

describe('FormAuditComponent', () => {
  let component: FormAuditComponent;
  let fixture: ComponentFixture<FormAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAuditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
