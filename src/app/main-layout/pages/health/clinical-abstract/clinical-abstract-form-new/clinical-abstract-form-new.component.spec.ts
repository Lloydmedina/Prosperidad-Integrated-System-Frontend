/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClinicalAbstractFormNewComponent } from './clinical-abstract-form-new.component';

describe('ClinicalAbstractFormNewComponent', () => {
  let component: ClinicalAbstractFormNewComponent;
  let fixture: ComponentFixture<ClinicalAbstractFormNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalAbstractFormNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalAbstractFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
