/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WaterPotabilityService } from './water-potability.service';

describe('Service: WaterPotability', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaterPotabilityService]
    });
  });

  it('should ...', inject([WaterPotabilityService], (service: WaterPotabilityService) => {
    expect(service).toBeTruthy();
  }));
});
