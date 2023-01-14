/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DafacIntakeListComponent } from './dafac-intake-list.component';

describe('DafacIntakeListComponent', () => {
  let component: DafacIntakeListComponent;
  let fixture: ComponentFixture<DafacIntakeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DafacIntakeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DafacIntakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
