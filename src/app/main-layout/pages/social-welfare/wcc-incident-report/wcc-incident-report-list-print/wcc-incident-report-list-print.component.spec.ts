/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccIncidentReportListPrintComponent } from './wcc-incident-report-list-print.component';

describe('WccIncidentReportListPrintComponent', () => {
  let component: WccIncidentReportListPrintComponent;
  let fixture: ComponentFixture<WccIncidentReportListPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccIncidentReportListPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccIncidentReportListPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
