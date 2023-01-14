/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BillingStatementComponent } from './billing-statement.component';

describe('BillingStatementComponent', () => {
  let component: BillingStatementComponent;
  let fixture: ComponentFixture<BillingStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
