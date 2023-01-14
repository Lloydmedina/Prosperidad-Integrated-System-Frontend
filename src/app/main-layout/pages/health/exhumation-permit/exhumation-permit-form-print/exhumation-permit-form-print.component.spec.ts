/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExhumationPermitFormPrintComponent } from './exhumation-permit-form-print.component';

describe('ExhumationPermitFormPrintComponent', () => {
  let component: ExhumationPermitFormPrintComponent;
  let fixture: ComponentFixture<ExhumationPermitFormPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhumationPermitFormPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhumationPermitFormPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
