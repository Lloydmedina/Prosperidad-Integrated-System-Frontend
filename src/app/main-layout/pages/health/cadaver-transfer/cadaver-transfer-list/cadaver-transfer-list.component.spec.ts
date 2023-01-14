/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CadaverTransferListComponent } from './cadaver-transfer-list.component';

describe('CadaverTransferListComponent', () => {
  let component: CadaverTransferListComponent;
  let fixture: ComponentFixture<CadaverTransferListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadaverTransferListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadaverTransferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
