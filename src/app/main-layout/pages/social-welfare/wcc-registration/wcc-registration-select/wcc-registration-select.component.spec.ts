/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccRegistrationSelectComponent } from './wcc-registration-select.component';

describe('WccRegistrationSelectComponent', () => {
  let component: WccRegistrationSelectComponent;
  let fixture: ComponentFixture<WccRegistrationSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccRegistrationSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccRegistrationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
