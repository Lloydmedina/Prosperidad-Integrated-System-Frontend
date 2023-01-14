/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WaitlistedReportComponent } from './waitlisted-report.component';

describe('WaitlistedReportComponent', () => {
  let component: WaitlistedReportComponent;
  let fixture: ComponentFixture<WaitlistedReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitlistedReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
