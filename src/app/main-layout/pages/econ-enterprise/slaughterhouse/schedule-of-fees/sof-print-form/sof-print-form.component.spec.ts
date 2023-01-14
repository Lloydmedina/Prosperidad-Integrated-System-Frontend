/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SofPrintFormComponent } from './sof-print-form.component';

describe('SofPrintFormComponent', () => {
  let component: SofPrintFormComponent;
  let fixture: ComponentFixture<SofPrintFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofPrintFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofPrintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
