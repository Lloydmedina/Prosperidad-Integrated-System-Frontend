/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndigentComponent } from './indigent.component';

describe('IndigentComponent', () => {
  let component: IndigentComponent;
  let fixture: ComponentFixture<IndigentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndigentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndigentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
