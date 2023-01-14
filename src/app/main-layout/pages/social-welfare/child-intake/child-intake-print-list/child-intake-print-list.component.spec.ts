/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildIntakePrintListComponent } from './child-intake-print-list.component';

describe('ChildIntakePrintListComponent', () => {
  let component: ChildIntakePrintListComponent;
  let fixture: ComponentFixture<ChildIntakePrintListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildIntakePrintListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildIntakePrintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
