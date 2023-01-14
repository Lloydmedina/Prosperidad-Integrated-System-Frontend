/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildIntakeListComponent } from './child-intake-list.component';

describe('ChildIntakeListComponent', () => {
  let component: ChildIntakeListComponent;
  let fixture: ComponentFixture<ChildIntakeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildIntakeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildIntakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
