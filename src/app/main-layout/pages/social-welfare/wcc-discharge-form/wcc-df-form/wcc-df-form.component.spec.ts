/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccDfFormComponent } from './wcc-df-form.component';

describe('WccDfFormComponent', () => {
  let component: WccDfFormComponent;
  let fixture: ComponentFixture<WccDfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccDfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccDfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
