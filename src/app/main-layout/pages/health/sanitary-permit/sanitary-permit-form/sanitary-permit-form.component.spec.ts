/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SanitaryPermitFormComponent } from './sanitary-permit-form.component';

describe('SanitaryPermitFormComponent', () => {
  let component: SanitaryPermitFormComponent;
  let fixture: ComponentFixture<SanitaryPermitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitaryPermitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitaryPermitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
