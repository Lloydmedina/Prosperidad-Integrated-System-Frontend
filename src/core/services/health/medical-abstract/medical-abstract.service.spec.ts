/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MedicalAbstractService } from './medical-abstract.service';

describe('Service: MedicalAbstract', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicalAbstractService]
    });
  });

  it('should ...', inject([MedicalAbstractService], (service: MedicalAbstractService) => {
    expect(service).toBeTruthy();
  }));
});
