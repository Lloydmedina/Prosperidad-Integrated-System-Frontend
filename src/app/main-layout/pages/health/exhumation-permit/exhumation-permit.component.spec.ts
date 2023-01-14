/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExhumationPermitComponent } from './exhumation-permit.component';

describe('ExhumationPermitComponent', () => {
  let component: ExhumationPermitComponent;
  let fixture: ComponentFixture<ExhumationPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhumationPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhumationPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
