/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PwdFormComponent } from './pwd-form.component';

describe('PwdFormComponent', () => {
  let component: PwdFormComponent;
  let fixture: ComponentFixture<PwdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
