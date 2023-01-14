/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HealthcardBusinessFormNewComponent } from './healthcard-business-form-new.component';

describe('HealthcardBusinessFormNewComponent', () => {
  let component: HealthcardBusinessFormNewComponent;
  let fixture: ComponentFixture<HealthcardBusinessFormNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthcardBusinessFormNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcardBusinessFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
