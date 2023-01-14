/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccRegistrationListComponent } from './wcc-registration-list.component';

describe('WccRegistrationListComponent', () => {
  let component: WccRegistrationListComponent;
  let fixture: ComponentFixture<WccRegistrationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccRegistrationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
