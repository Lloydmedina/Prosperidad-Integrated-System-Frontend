/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EccdFacilityService } from './eccd-facility.service';

describe('Service: EccdFacility', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EccdFacilityService]
    });
  });

  it('should ...', inject([EccdFacilityService], (service: EccdFacilityService) => {
    expect(service).toBeTruthy();
  }));
});
