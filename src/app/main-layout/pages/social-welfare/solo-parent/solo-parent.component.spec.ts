/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SoloParentComponent } from './solo-parent.component';

describe('SoloParentComponent', () => {
  let component: SoloParentComponent;
  let fixture: ComponentFixture<SoloParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
