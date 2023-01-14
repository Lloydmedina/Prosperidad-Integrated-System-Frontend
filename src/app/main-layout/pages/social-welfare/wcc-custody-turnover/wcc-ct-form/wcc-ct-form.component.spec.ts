/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccCtFormComponent } from './wcc-ct-form.component';

describe('WccCtFormComponent', () => {
  let component: WccCtFormComponent;
  let fixture: ComponentFixture<WccCtFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccCtFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccCtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
