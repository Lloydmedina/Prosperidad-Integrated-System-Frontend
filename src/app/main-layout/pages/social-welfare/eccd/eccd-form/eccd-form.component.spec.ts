/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EccdFormComponent } from './eccd-form.component';

describe('EccdFormComponent', () => {
  let component: EccdFormComponent;
  let fixture: ComponentFixture<EccdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EccdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EccdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
