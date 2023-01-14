/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SrFormComponent } from './sr-form.component';

describe('SrFormComponent', () => {
  let component: SrFormComponent;
  let fixture: ComponentFixture<SrFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
