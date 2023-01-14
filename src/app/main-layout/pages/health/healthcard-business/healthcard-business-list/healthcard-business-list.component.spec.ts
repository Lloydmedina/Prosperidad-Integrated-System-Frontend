/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HealthcardBusinessListComponent } from './healthcard-business-list.component';

describe('HealthcardBusinessListComponent', () => {
  let component: HealthcardBusinessListComponent;
  let fixture: ComponentFixture<HealthcardBusinessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthcardBusinessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcardBusinessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
