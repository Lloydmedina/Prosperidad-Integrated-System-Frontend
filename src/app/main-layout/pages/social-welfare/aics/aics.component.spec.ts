/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AicsComponent } from './aics.component';

describe('AicsComponent', () => {
  let component: AicsComponent;
  let fixture: ComponentFixture<AicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
