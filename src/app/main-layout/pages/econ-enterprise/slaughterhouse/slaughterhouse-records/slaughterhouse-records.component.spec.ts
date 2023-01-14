/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlaughterhouseRecordsComponent } from './slaughterhouse-records.component';

describe('SlaughterhouseRecordsComponent', () => {
  let component: SlaughterhouseRecordsComponent;
  let fixture: ComponentFixture<SlaughterhouseRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaughterhouseRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaughterhouseRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
