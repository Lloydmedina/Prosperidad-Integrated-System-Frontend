/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeniorCitizenService } from './senior-citizen.service';

describe('Service: SeniorCitizen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeniorCitizenService]
    });
  });

  it('should ...', inject([SeniorCitizenService], (service: SeniorCitizenService) => {
    expect(service).toBeTruthy();
  }));
});
