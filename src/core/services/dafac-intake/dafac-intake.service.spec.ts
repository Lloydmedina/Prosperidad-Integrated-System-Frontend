/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DafacIntakeService } from './dafac-intake.service';

describe('Service: DafacIntake', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DafacIntakeService]
    });
  });

  it('should ...', inject([DafacIntakeService], (service: DafacIntakeService) => {
    expect(service).toBeTruthy();
  }));
});
