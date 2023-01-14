/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WaterPotabilityFormComponent } from './water-potability-form.component';

describe('WaterPotabilityFormComponent', () => {
  let component: WaterPotabilityFormComponent;
  let fixture: ComponentFixture<WaterPotabilityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterPotabilityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterPotabilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
