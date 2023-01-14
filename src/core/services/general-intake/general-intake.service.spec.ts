/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneralIntakeService } from './general-intake.service';

describe('Service: GeneralIntake', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralIntakeService]
    });
  });

  it('should ...', inject([GeneralIntakeService], (service: GeneralIntakeService) => {
    expect(service).toBeTruthy();
  }));
});
