/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExhumationPermitService } from './exhumation-permit.service';

describe('Service: ExhumationPermit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExhumationPermitService]
    });
  });

  it('should ...', inject([ExhumationPermitService], (service: ExhumationPermitService) => {
    expect(service).toBeTruthy();
  }));
});
