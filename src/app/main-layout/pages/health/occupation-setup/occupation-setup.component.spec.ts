/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OccupationSetupComponent } from './occupation-setup.component';

describe('OccupationSetupComponent', () => {
  let component: OccupationSetupComponent;
  let fixture: ComponentFixture<OccupationSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
