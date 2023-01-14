/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WaterPotabilityComponent } from './water-potability.component';

describe('WaterPotabilityComponent', () => {
  let component: WaterPotabilityComponent;
  let fixture: ComponentFixture<WaterPotabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterPotabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterPotabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
