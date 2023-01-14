/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EccdComponent } from './eccd.component';

describe('EccdComponent', () => {
  let component: EccdComponent;
  let fixture: ComponentFixture<EccdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EccdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EccdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
