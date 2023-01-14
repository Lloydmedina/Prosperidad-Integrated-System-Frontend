/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndigentIntakePrintFormComponent } from './indigent-intake-print-form.component';

describe('IndigentIntakePrintFormComponent', () => {
  let component: IndigentIntakePrintFormComponent;
  let fixture: ComponentFixture<IndigentIntakePrintFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndigentIntakePrintFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndigentIntakePrintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
