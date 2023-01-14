/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AicsLetterComponent } from './aics-letter.component';

describe('AicsLetterComponent', () => {
  let component: AicsLetterComponent;
  let fixture: ComponentFixture<AicsLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AicsLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AicsLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
