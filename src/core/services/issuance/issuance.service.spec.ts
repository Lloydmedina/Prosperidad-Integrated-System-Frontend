/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IssuanceService } from './issuance.service';

describe('Service: Issuance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuanceService]
    });
  });

  it('should ...', inject([IssuanceService], (service: IssuanceService) => {
    expect(service).toBeTruthy();
  }));
});
