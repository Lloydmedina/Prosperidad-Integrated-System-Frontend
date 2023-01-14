/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccSummaryIntakeListPrintComponent } from './wcc-summary-intake-list-print.component';

describe('WccSummaryIntakeListPrintComponent', () => {
  let component: WccSummaryIntakeListPrintComponent;
  let fixture: ComponentFixture<WccSummaryIntakeListPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccSummaryIntakeListPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccSummaryIntakeListPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
