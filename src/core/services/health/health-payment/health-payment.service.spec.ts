/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HealthPaymentService } from './health-payment.service';

describe('Service: HealthPayment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthPaymentService]
    });
  });

  it('should ...', inject([HealthPaymentService], (service: HealthPaymentService) => {
    expect(service).toBeTruthy();
  }));
});
