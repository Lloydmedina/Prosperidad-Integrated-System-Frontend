/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CadaverTransferFormComponent } from './cadaver-transfer-form.component';

describe('CadaverTransferFormComponent', () => {
  let component: CadaverTransferFormComponent;
  let fixture: ComponentFixture<CadaverTransferFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadaverTransferFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadaverTransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
