/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnteMortemComponent } from './ante-mortem.component';

describe('AnteMortemComponent', () => {
  let component: AnteMortemComponent;
  let fixture: ComponentFixture<AnteMortemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnteMortemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnteMortemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
