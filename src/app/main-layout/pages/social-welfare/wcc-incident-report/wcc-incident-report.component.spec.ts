/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccIncidentReportComponent } from './wcc-incident-report.component';

describe('WccIncidentReportComponent', () => {
  let component: WccIncidentReportComponent;
  let fixture: ComponentFixture<WccIncidentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccIncidentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccIncidentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
