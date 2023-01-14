/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccSummaryIntakeFormPrintComponent } from './wcc-summary-intake-form-print.component';

describe('WccSummaryIntakeFormPrintComponent', () => {
  let component: WccSummaryIntakeFormPrintComponent;
  let fixture: ComponentFixture<WccSummaryIntakeFormPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccSummaryIntakeFormPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccSummaryIntakeFormPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
