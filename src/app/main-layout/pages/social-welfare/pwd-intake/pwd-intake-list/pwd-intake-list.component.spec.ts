/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PwdIntakeListComponent } from './pwd-intake-list.component';

describe('PwdIntakeListComponent', () => {
  let component: PwdIntakeListComponent;
  let fixture: ComponentFixture<PwdIntakeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdIntakeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdIntakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
