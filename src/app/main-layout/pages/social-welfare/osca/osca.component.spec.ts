/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OscaComponent } from './osca.component';

describe('OscaComponent', () => {
  let component: OscaComponent;
  let fixture: ComponentFixture<OscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
