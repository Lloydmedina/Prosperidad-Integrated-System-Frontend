/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndigentListComponent } from './indigent-list.component';

describe('IndigentListComponent', () => {
  let component: IndigentListComponent;
  let fixture: ComponentFixture<IndigentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndigentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndigentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
