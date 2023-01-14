/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnteMortemListComponent } from './ante-mortem-list.component';

describe('AnteMortemListComponent', () => {
  let component: AnteMortemListComponent;
  let fixture: ComponentFixture<AnteMortemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnteMortemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnteMortemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
