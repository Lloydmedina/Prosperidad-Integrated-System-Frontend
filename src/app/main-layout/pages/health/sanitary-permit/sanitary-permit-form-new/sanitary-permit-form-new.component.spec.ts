/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SanitaryPermitFormNewComponent } from './sanitary-permit-form-new.component';

describe('SanitaryPermitFormNewComponent', () => {
  let component: SanitaryPermitFormNewComponent;
  let fixture: ComponentFixture<SanitaryPermitFormNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitaryPermitFormNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitaryPermitFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
