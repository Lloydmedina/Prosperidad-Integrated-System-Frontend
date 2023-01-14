/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PwdPrintFormComponent } from './pwd-print-form.component';

describe('PwdPrintFormComponent', () => {
  let component: PwdPrintFormComponent;
  let fixture: ComponentFixture<PwdPrintFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdPrintFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdPrintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
