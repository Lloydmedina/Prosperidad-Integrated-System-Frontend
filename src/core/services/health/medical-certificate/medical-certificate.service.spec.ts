/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MedicalCertificateService } from './medical-certificate.service';

describe('Service: MedicalCertificate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicalCertificateService]
    });
  });

  it('should ...', inject([MedicalCertificateService], (service: MedicalCertificateService) => {
    expect(service).toBeTruthy();
  }));
});
