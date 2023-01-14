/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WcciuListComponent } from './wcciu-list.component';

describe('WcciuListComponent', () => {
  let component: WcciuListComponent;
  let fixture: ComponentFixture<WcciuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcciuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcciuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
