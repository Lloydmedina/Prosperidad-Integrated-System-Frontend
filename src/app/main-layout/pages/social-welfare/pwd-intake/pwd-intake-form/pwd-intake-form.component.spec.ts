/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PwdIntakeFormComponent } from './pwd-intake-form.component';

describe('PwdIntakeFormComponent', () => {
  let component: PwdIntakeFormComponent;
  let fixture: ComponentFixture<PwdIntakeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdIntakeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdIntakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
