/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DromicListComponent } from './dromic-list.component';

describe('DromicListComponent', () => {
  let component: DromicListComponent;
  let fixture: ComponentFixture<DromicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DromicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DromicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
