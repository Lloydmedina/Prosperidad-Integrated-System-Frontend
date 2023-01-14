/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OccupationSetupListComponent } from './occupation-setup-list.component';

describe('OccupationSetupListComponent', () => {
  let component: OccupationSetupListComponent;
  let fixture: ComponentFixture<OccupationSetupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationSetupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationSetupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
