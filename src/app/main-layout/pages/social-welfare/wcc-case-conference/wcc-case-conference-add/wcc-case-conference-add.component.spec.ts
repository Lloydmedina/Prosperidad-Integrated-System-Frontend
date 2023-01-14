/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccCaseConferenceAddComponent } from './wcc-case-conference-add.component';

describe('WccCaseConferenceAddComponent', () => {
  let component: WccCaseConferenceAddComponent;
  let fixture: ComponentFixture<WccCaseConferenceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccCaseConferenceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccCaseConferenceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
