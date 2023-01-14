/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WaitlistedReportPrintFormComponent } from './waitlisted-report-print-form.component';

describe('WaitlistedReportPrintFormComponent', () => {
  let component: WaitlistedReportPrintFormComponent;
  let fixture: ComponentFixture<WaitlistedReportPrintFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitlistedReportPrintFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistedReportPrintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
