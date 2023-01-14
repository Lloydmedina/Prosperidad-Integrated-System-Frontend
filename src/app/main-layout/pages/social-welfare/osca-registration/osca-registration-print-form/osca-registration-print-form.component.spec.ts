/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OscaRegistrationPrintFormComponent } from './osca-registration-print-form.component';

describe('OscaRegistrationPrintFormComponent', () => {
  let component: OscaRegistrationPrintFormComponent;
  let fixture: ComponentFixture<OscaRegistrationPrintFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OscaRegistrationPrintFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OscaRegistrationPrintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
