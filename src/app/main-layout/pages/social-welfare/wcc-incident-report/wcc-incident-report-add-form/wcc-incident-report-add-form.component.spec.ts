/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccIncidentReportAddFormComponent } from './wcc-incident-report-add-form.component';

describe('WccIncidentReportAddFormComponent', () => {
  let component: WccIncidentReportAddFormComponent;
  let fixture: ComponentFixture<WccIncidentReportAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccIncidentReportAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccIncidentReportAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
