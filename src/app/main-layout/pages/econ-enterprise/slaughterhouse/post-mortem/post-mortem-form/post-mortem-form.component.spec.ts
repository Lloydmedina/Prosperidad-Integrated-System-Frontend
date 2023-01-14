/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostMortemFormComponent } from './post-mortem-form.component';

describe('PostMortemFormComponent', () => {
  let component: PostMortemFormComponent;
  let fixture: ComponentFixture<PostMortemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMortemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMortemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
