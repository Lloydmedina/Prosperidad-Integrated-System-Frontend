/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AicsPrintFormComponent } from './aics-print-form.component';

describe('AicsPrintFormComponent', () => {
  let component: AicsPrintFormComponent;
  let fixture: ComponentFixture<AicsPrintFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AicsPrintFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AicsPrintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
