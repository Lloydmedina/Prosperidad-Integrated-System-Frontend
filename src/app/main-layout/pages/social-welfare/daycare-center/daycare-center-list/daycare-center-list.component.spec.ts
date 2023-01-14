/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DaycareCenterListComponent } from './daycare-center-list.component';

describe('DaycareCenterListComponent', () => {
  let component: DaycareCenterListComponent;
  let fixture: ComponentFixture<DaycareCenterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaycareCenterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaycareCenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
