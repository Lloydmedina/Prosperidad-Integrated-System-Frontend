/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DafacIntakePrintListComponent } from './dafac-intake-print-list.component';

describe('DafacIntakePrintListComponent', () => {
  let component: DafacIntakePrintListComponent;
  let fixture: ComponentFixture<DafacIntakePrintListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DafacIntakePrintListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DafacIntakePrintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
