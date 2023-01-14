/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OccupationSetupFormComponent } from './occupation-setup-form.component';

describe('OccupationSetupFormComponent', () => {
  let component: OccupationSetupFormComponent;
  let fixture: ComponentFixture<OccupationSetupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationSetupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationSetupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
