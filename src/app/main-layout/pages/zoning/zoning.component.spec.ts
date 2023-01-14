/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZoningComponent } from './zoning.component';

describe('ZoningComponent', () => {
  let component: ZoningComponent;
  let fixture: ComponentFixture<ZoningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
