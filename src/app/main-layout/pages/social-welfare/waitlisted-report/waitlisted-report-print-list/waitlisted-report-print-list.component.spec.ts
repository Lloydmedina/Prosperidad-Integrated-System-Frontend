/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WaitlistedReportPrintListComponent } from './waitlisted-report-print-list.component';

describe('WaitlistedReportPrintListComponent', () => {
  let component: WaitlistedReportPrintListComponent;
  let fixture: ComponentFixture<WaitlistedReportPrintListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitlistedReportPrintListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistedReportPrintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
