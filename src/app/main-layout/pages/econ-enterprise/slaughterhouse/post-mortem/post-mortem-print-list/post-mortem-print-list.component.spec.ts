/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostMortemPrintListComponent } from './post-mortem-print-list.component';

describe('PostMortemPrintListComponent', () => {
  let component: PostMortemPrintListComponent;
  let fixture: ComponentFixture<PostMortemPrintListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMortemPrintListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMortemPrintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
