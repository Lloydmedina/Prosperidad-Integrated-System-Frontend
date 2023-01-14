/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndigentPrintListComponent } from './indigent-print-list.component';

describe('IndigentPrintListComponent', () => {
  let component: IndigentPrintListComponent;
  let fixture: ComponentFixture<IndigentPrintListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndigentPrintListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndigentPrintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
