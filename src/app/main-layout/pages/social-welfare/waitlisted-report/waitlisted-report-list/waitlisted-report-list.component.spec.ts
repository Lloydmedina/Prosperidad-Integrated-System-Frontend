/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WaitlistedReportListComponent } from './waitlisted-report-list.component';

describe('WaitlistedReportListComponent', () => {
  let component: WaitlistedReportListComponent;
  let fixture: ComponentFixture<WaitlistedReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitlistedReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistedReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
