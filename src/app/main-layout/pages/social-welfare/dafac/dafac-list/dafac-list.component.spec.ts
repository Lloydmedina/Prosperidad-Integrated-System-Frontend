/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DafacListComponent } from './dafac-list.component';

describe('DafacListComponent', () => {
  let component: DafacListComponent;
  let fixture: ComponentFixture<DafacListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DafacListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DafacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
