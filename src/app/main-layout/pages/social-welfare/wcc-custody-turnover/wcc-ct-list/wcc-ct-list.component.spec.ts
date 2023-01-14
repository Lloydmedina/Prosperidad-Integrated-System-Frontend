/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccCtListComponent } from './wcc-ct-list.component';

describe('WccCtListComponent', () => {
  let component: WccCtListComponent;
  let fixture: ComponentFixture<WccCtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccCtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccCtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
