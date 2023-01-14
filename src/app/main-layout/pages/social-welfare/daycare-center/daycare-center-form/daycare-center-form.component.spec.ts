/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DaycareCenterFormComponent } from './daycare-center-form.component';

describe('DaycareCenterFormComponent', () => {
  let component: DaycareCenterFormComponent;
  let fixture: ComponentFixture<DaycareCenterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaycareCenterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaycareCenterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
