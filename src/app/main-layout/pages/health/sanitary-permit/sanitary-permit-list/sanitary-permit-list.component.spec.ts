/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SanitaryPermitListComponent } from './sanitary-permit-list.component';

describe('SanitaryPermitListComponent', () => {
  let component: SanitaryPermitListComponent;
  let fixture: ComponentFixture<SanitaryPermitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitaryPermitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitaryPermitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
