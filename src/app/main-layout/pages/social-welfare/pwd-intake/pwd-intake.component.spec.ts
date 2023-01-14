/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PwdIntakeComponent } from './pwd-intake.component';

describe('PwdIntakeComponent', () => {
  let component: PwdIntakeComponent;
  let fixture: ComponentFixture<PwdIntakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdIntakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
