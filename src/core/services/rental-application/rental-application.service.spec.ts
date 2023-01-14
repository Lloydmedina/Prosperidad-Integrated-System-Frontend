/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RentalApplicationService } from './rental-application.service';

describe('Service: RentalApplication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentalApplicationService]
    });
  });

  it('should ...', inject([RentalApplicationService], (service: RentalApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
