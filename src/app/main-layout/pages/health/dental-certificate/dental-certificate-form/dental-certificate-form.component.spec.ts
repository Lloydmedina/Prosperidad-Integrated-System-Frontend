/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DentalCertificateFormComponent } from './dental-certificate-form.component';

describe('DentalCertificateFormComponent', () => {
  let component: DentalCertificateFormComponent;
  let fixture: ComponentFixture<DentalCertificateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalCertificateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalCertificateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
