/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OscaFormComponent } from './osca-form.component';

describe('OscaFormComponent', () => {
  let component: OscaFormComponent;
  let fixture: ComponentFixture<OscaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OscaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OscaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
