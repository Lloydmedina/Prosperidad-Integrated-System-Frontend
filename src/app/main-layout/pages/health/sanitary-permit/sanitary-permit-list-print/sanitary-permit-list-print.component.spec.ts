/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SanitaryPermitListPrintComponent } from './sanitary-permit-list-print.component';

describe('SanitaryPermitListPrintComponent', () => {
  let component: SanitaryPermitListPrintComponent;
  let fixture: ComponentFixture<SanitaryPermitListPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitaryPermitListPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitaryPermitListPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
