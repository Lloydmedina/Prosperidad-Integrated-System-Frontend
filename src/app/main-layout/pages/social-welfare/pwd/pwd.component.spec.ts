/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PwdComponent } from './pwd.component';

describe('PwdComponent', () => {
  let component: PwdComponent;
  let fixture: ComponentFixture<PwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
