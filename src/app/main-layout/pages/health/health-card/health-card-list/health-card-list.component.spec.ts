/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HealthCardListComponent } from './health-card-list.component';

describe('HealthCardListComponent', () => {
  let component: HealthCardListComponent;
  let fixture: ComponentFixture<HealthCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
