/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IssuanceListComponent } from './issuance-list.component';

describe('IssuanceListComponent', () => {
  let component: IssuanceListComponent;
  let fixture: ComponentFixture<IssuanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
