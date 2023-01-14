/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccCaseConferenceListPrintComponent } from './wcc-case-conference-list-print.component';

describe('WccCaseConferenceListPrintComponent', () => {
  let component: WccCaseConferenceListPrintComponent;
  let fixture: ComponentFixture<WccCaseConferenceListPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccCaseConferenceListPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccCaseConferenceListPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
