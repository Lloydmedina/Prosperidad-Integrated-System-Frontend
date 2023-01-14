/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccInterventionUndertakenComponent } from './wcc-intervention-undertaken.component';

describe('WccInterventionUndertakenComponent', () => {
  let component: WccInterventionUndertakenComponent;
  let fixture: ComponentFixture<WccInterventionUndertakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccInterventionUndertakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccInterventionUndertakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
