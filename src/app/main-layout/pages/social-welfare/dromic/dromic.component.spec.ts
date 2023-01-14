/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DromicComponent } from './dromic.component';

describe('DromicComponent', () => {
  let component: DromicComponent;
  let fixture: ComponentFixture<DromicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DromicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DromicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
