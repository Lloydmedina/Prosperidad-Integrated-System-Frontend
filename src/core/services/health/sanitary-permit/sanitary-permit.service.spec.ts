/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SanitaryPermitService } from './sanitary-permit.service';

describe('Service: SanitaryPermit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SanitaryPermitService]
    });
  });

  it('should ...', inject([SanitaryPermitService], (service: SanitaryPermitService) => {
    expect(service).toBeTruthy();
  }));
});
