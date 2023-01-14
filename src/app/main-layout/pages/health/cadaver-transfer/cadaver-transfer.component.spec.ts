/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CadaverTransferComponent } from './cadaver-transfer.component';

describe('CadaverTransferComponent', () => {
  let component: CadaverTransferComponent;
  let fixture: ComponentFixture<CadaverTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadaverTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadaverTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
