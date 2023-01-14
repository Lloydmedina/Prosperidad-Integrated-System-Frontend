/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DentalCertificateFormPrintComponent } from './dental-certificate-form-print.component';

describe('DentalCertificateFormPrintComponent', () => {
  let component: DentalCertificateFormPrintComponent;
  let fixture: ComponentFixture<DentalCertificateFormPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalCertificateFormPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalCertificateFormPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
