/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CadaverTransferFromPrintComponent } from './cadaver-transfer-from-print.component';

describe('CadaverTransferFromPrintComponent', () => {
  let component: CadaverTransferFromPrintComponent;
  let fixture: ComponentFixture<CadaverTransferFromPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadaverTransferFromPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadaverTransferFromPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
