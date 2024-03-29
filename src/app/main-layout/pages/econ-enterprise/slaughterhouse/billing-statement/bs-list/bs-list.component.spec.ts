/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BsListComponent } from './bs-list.component';

describe('BsListComponent', () => {
  let component: BsListComponent;
  let fixture: ComponentFixture<BsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
