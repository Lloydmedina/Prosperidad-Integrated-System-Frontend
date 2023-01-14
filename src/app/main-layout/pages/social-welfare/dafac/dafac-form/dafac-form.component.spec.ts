/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DafacFormComponent } from './dafac-form.component';

describe('DafacFormComponent', () => {
  let component: DafacFormComponent;
  let fixture: ComponentFixture<DafacFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DafacFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DafacFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
