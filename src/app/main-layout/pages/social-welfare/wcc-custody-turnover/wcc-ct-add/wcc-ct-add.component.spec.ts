/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WccCtAddComponent } from './wcc-ct-add.component';

describe('WccCtAddComponent', () => {
  let component: WccCtAddComponent;
  let fixture: ComponentFixture<WccCtAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WccCtAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WccCtAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
