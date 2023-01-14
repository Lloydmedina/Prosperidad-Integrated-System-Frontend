/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccDfAddComponent } from './wcc-df-add.component';

describe('WccDfAddComponent', () => {
  let component: WccDfAddComponent;
  let fixture: ComponentFixture<WccDfAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccDfAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccDfAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
