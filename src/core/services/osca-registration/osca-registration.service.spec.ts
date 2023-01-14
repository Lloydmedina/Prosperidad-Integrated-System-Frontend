/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OscaRegistrationService } from './osca-registration.service';

describe('Service: OscaRegistration', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OscaRegistrationService]
    });
  });

  it('should ...', inject([OscaRegistrationService], (service: OscaRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
