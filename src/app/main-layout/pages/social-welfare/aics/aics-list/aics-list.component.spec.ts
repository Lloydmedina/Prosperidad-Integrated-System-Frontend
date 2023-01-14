/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AicsListComponent } from './aics-list.component';

describe('AicsListComponent', () => {
  let component: AicsListComponent;
  let fixture: ComponentFixture<AicsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AicsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
