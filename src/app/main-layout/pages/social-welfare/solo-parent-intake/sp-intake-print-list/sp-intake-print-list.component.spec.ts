/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpIntakePrintListComponent } from './sp-intake-print-list.component';

describe('SpIntakePrintListComponent', () => {
  let component: SpIntakePrintListComponent;
  let fixture: ComponentFixture<SpIntakePrintListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpIntakePrintListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpIntakePrintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
