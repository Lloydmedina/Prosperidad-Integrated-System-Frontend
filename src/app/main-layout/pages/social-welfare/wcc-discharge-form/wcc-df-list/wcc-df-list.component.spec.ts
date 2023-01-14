/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccDfListComponent } from './wcc-df-list.component';

describe('WccDfListComponent', () => {
  let component: WccDfListComponent;
  let fixture: ComponentFixture<WccDfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccDfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccDfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
