/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccIncidentReportAddComponent } from './wcc-incident-report-add.component';

describe('WccIncidentReportAddComponent', () => {
  let component: WccIncidentReportAddComponent;
  let fixture: ComponentFixture<WccIncidentReportAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccIncidentReportAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccIncidentReportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
