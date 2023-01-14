/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccRegistrationFormPrintComponent } from './wcc-registration-form-print.component';

describe('WccRegistrationFormPrintComponent', () => {
  let component: WccRegistrationFormPrintComponent;
  let fixture: ComponentFixture<WccRegistrationFormPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccRegistrationFormPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccRegistrationFormPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
