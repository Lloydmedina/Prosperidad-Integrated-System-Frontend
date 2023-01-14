/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MedicalCertificateFormNewComponent } from './medical-certificate-form-new.component';

describe('MedicalCertificateFormNewComponent', () => {
  let component: MedicalCertificateFormNewComponent;
  let fixture: ComponentFixture<MedicalCertificateFormNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalCertificateFormNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCertificateFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
