/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WcciuAddComponent } from './wcciu-add.component';

describe('WcciuAddComponent', () => {
  let component: WcciuAddComponent;
  let fixture: ComponentFixture<WcciuAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcciuAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcciuAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
