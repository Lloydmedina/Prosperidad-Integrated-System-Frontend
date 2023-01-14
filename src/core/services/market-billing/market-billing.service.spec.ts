/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarketBillingService } from './market-billing.service';

describe('Service: MarketBilling', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketBillingService]
    });
  });

  it('should ...', inject([MarketBillingService], (service: MarketBillingService) => {
    expect(service).toBeTruthy();
  }));
});
