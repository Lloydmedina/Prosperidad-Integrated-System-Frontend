/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DromicFormComponent } from './dromic-form.component';

describe('DromicFormComponent', () => {
  let component: DromicFormComponent;
  let fixture: ComponentFixture<DromicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DromicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DromicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
