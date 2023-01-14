/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeniorCitizenPensionerService } from './senior-citizen-pensioner.service';

describe('Service: SeniorCitizenPensioner', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeniorCitizenPensionerService]
    });
  });

  it('should ...', inject([SeniorCitizenPensionerService], (service: SeniorCitizenPensionerService) => {
    expect(service).toBeTruthy();
  }));
});
