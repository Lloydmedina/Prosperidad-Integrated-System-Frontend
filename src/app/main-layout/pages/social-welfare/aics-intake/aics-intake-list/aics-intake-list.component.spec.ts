/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AicsIntakeListComponent } from './aics-intake-list.component';

describe('AicsIntakeListComponent', () => {
  let component: AicsIntakeListComponent;
  let fixture: ComponentFixture<AicsIntakeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AicsIntakeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AicsIntakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
