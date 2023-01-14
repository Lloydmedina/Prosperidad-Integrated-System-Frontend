/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccAcknowledgementComponent } from './wcc-acknowledgement.component';

describe('WccAcknowledgementComponent', () => {
  let component: WccAcknowledgementComponent;
  let fixture: ComponentFixture<WccAcknowledgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccAcknowledgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccAcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
