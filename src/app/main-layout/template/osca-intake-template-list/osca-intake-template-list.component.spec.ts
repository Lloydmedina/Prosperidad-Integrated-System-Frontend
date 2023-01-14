/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OscaIntakeTemplateListComponent } from './osca-intake-template-list.component';

describe('OscaIntakeTemplateListComponent', () => {
  let component: OscaIntakeTemplateListComponent;
  let fixture: ComponentFixture<OscaIntakeTemplateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OscaIntakeTemplateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OscaIntakeTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
