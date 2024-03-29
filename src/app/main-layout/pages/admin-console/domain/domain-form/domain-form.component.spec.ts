/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DomainFormComponent } from './domain-form.component';

describe('DomainFormComponent', () => {
  let component: DomainFormComponent;
  let fixture: ComponentFixture<DomainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
