/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SanitaryPermitComponent } from './sanitary-permit.component';

describe('SanitaryPermitComponent', () => {
  let component: SanitaryPermitComponent;
  let fixture: ComponentFixture<SanitaryPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitaryPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitaryPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
