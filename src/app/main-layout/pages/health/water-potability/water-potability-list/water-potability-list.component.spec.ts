/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WaterPotabilityListComponent } from './water-potability-list.component';

describe('WaterPotabilityListComponent', () => {
  let component: WaterPotabilityListComponent;
  let fixture: ComponentFixture<WaterPotabilityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterPotabilityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterPotabilityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
