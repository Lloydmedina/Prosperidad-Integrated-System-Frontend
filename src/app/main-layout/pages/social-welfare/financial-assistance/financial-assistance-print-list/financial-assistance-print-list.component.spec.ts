/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinancialAssistancePrintListComponent } from './financial-assistance-print-list.component';

describe('FinancialAssistancePrintListComponent', () => {
  let component: FinancialAssistancePrintListComponent;
  let fixture: ComponentFixture<FinancialAssistancePrintListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialAssistancePrintListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialAssistancePrintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
