/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EvacuationCenterFormComponent } from './evacuation-center-form.component';

describe('EvacuationCenterFormComponent', () => {
  let component: EvacuationCenterFormComponent;
  let fixture: ComponentFixture<EvacuationCenterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvacuationCenterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvacuationCenterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
