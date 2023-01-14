/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccArAddComponent } from './wcc-ar-add.component';

describe('WccArAddComponent', () => {
  let component: WccArAddComponent;
  let fixture: ComponentFixture<WccArAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccArAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccArAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
