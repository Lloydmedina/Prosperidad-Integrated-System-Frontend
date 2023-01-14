/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeesChargesService } from './fees-charges.service';

describe('Service: FeesCharges', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeesChargesService]
    });
  });

  it('should ...', inject([FeesChargesService], (service: FeesChargesService) => {
    expect(service).toBeTruthy();
  }));
});
