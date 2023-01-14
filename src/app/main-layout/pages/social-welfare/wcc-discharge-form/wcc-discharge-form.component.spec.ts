/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccDischargeFormComponent } from './wcc-discharge-form.component';

describe('WccDischargeFormComponent', () => {
  let component: WccDischargeFormComponent;
  let fixture: ComponentFixture<WccDischargeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccDischargeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccDischargeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
