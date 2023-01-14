/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccCtFormPrintComponent } from './wcc-ct-form-print.component';

describe('WccCtFormPrintComponent', () => {
  let component: WccCtFormPrintComponent;
  let fixture: ComponentFixture<WccCtFormPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccCtFormPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccCtFormPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
