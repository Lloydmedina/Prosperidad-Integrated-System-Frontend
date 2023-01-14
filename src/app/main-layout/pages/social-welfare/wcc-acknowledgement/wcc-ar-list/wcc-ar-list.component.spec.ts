/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccArListComponent } from './wcc-ar-list.component';

describe('WccArListComponent', () => {
  let component: WccArListComponent;
  let fixture: ComponentFixture<WccArListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccArListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccArListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
