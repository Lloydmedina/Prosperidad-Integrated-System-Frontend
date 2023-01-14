/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccCaseConferenceFormPrintComponent } from './wcc-case-conference-form-print.component';

describe('WccCaseConferenceFormPrintComponent', () => {
  let component: WccCaseConferenceFormPrintComponent;
  let fixture: ComponentFixture<WccCaseConferenceFormPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccCaseConferenceFormPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccCaseConferenceFormPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
