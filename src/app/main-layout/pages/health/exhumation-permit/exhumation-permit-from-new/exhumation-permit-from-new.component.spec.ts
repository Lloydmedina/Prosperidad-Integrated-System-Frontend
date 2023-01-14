/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExhumationPermitFromNewComponent } from './exhumation-permit-from-new.component';

describe('ExhumationPermitFromNewComponent', () => {
  let component: ExhumationPermitFromNewComponent;
  let fixture: ComponentFixture<ExhumationPermitFromNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhumationPermitFromNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhumationPermitFromNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
