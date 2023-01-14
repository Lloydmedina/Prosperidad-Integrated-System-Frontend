/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AicsVoucherFormComponent } from './aics-voucher-form.component';

describe('AicsVoucherFormComponent', () => {
  let component: AicsVoucherFormComponent;
  let fixture: ComponentFixture<AicsVoucherFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AicsVoucherFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AicsVoucherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
