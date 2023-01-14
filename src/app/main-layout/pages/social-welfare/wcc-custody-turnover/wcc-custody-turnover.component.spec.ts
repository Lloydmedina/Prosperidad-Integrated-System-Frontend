/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccCustodyTurnoverComponent } from './wcc-custody-turnover.component';

describe('WccCustodyTurnoverComponent', () => {
  let component: WccCustodyTurnoverComponent;
  let fixture: ComponentFixture<WccCustodyTurnoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccCustodyTurnoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccCustodyTurnoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
