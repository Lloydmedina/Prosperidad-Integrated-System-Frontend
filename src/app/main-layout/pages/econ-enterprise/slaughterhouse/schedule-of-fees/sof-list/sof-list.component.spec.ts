/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SofListComponent } from './sof-list.component';

describe('SofListComponent', () => {
  let component: SofListComponent;
  let fixture: ComponentFixture<SofListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
