/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndigentIntakeService } from './indigent-intake.service';

describe('Service: IndigentIntake', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndigentIntakeService]
    });
  });

  it('should ...', inject([IndigentIntakeService], (service: IndigentIntakeService) => {
    expect(service).toBeTruthy();
  }));
});
