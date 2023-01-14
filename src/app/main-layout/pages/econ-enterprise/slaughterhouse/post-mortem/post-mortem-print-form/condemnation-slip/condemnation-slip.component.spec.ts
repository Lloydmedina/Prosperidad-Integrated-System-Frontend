/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CondemnationSlipComponent } from './condemnation-slip.component';

describe('CondemnationSlipComponent', () => {
  let component: CondemnationSlipComponent;
  let fixture: ComponentFixture<CondemnationSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondemnationSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondemnationSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
