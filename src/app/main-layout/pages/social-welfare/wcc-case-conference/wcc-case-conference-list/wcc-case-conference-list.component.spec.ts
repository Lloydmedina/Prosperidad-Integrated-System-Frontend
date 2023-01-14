/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccCaseConferenceListComponent } from './wcc-case-conference-list.component';

describe('WccCaseConferenceListComponent', () => {
  let component: WccCaseConferenceListComponent;
  let fixture: ComponentFixture<WccCaseConferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccCaseConferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccCaseConferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
