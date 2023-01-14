/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostMortemListComponent } from './post-mortem-list.component';

describe('PostMortemListComponent', () => {
  let component: PostMortemListComponent;
  let fixture: ComponentFixture<PostMortemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMortemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMortemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
