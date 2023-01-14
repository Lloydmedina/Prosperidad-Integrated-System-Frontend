/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SofFormComponent } from './sof-form.component';

describe('SofFormComponent', () => {
  let component: SofFormComponent;
  let fixture: ComponentFixture<SofFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
