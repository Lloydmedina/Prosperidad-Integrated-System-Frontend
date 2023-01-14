/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PwdListComponent } from './pwd-list.component';

describe('PwdListComponent', () => {
  let component: PwdListComponent;
  let fixture: ComponentFixture<PwdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
