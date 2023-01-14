/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OscaIntakeComponent } from './osca-intake.component';

describe('OscaIntakeComponent', () => {
  let component: OscaIntakeComponent;
  let fixture: ComponentFixture<OscaIntakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OscaIntakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OscaIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
