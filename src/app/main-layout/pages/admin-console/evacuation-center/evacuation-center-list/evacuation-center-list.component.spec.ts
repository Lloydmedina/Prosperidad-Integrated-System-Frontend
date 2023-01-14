/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EvacuationCenterListComponent } from './evacuation-center-list.component';

describe('EvacuationCenterListComponent', () => {
  let component: EvacuationCenterListComponent;
  let fixture: ComponentFixture<EvacuationCenterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvacuationCenterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvacuationCenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
