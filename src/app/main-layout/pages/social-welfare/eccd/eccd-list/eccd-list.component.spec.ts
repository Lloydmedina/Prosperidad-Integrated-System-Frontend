/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EccdListComponent } from './eccd-list.component';

describe('EccdListComponent', () => {
  let component: EccdListComponent;
  let fixture: ComponentFixture<EccdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EccdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EccdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
