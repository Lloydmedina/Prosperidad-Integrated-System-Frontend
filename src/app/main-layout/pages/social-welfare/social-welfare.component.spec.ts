/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SocialWelfareComponent } from './social-welfare.component';

describe('SocialWelfareComponent', () => {
  let component: SocialWelfareComponent;
  let fixture: ComponentFixture<SocialWelfareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialWelfareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialWelfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
