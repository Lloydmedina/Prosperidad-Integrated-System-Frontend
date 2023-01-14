/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OscaRegistrationListComponent } from './osca-registration-list.component';

describe('OscaRegistrationListComponent', () => {
  let component: OscaRegistrationListComponent;
  let fixture: ComponentFixture<OscaRegistrationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OscaRegistrationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OscaRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
