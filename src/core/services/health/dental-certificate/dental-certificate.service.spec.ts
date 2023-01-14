/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DentalCertificateService } from './dental-certificate.service';

describe('Service: DentalCertificate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DentalCertificateService]
    });
  });

  it('should ...', inject([DentalCertificateService], (service: DentalCertificateService) => {
    expect(service).toBeTruthy();
  }));
});
