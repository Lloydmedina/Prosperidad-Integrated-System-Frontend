/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostMortemComponent } from './post-mortem.component';

describe('PostMortemComponent', () => {
  let component: PostMortemComponent;
  let fixture: ComponentFixture<PostMortemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMortemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMortemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
