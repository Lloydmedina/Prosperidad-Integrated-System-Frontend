/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DafacComponent } from './dafac.component';

describe('DafacComponent', () => {
  let component: DafacComponent;
  let fixture: ComponentFixture<DafacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DafacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DafacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
