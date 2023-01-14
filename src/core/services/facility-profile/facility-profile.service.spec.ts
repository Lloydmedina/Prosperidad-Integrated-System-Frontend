/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FacilityProfileService } from './facility-profile.service';

describe('Service: FacilityProfile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacilityProfileService]
    });
  });

  it('should ...', inject([FacilityProfileService], (service: FacilityProfileService) => {
    expect(service).toBeTruthy();
  }));
});
