/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccIncidentReportListComponent } from './wcc-incident-report-list.component';

describe('WccIncidentReportListComponent', () => {
  let component: WccIncidentReportListComponent;
  let fixture: ComponentFixture<WccIncidentReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccIncidentReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccIncidentReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
