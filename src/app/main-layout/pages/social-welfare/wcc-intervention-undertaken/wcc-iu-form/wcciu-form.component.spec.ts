/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WcciuFormComponent } from './wcciu-form.component';

describe('WcciuFormComponent', () => {
  let component: WcciuFormComponent;
  let fixture: ComponentFixture<WcciuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcciuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcciuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
