/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AicsIntakeService } from './aics-intake.service';

describe('Service: AicsIntake', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AicsIntakeService]
    });
  });

  it('should ...', inject([AicsIntakeService], (service: AicsIntakeService) => {
    expect(service).toBeTruthy();
  }));
});
