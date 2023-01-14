/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DafacIntakeComponent } from './dafac-intake.component';

describe('DafacIntakeComponent', () => {
  let component: DafacIntakeComponent;
  let fixture: ComponentFixture<DafacIntakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DafacIntakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DafacIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
