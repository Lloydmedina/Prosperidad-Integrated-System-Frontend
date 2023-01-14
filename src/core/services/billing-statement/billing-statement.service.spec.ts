/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BillingStatementService } from './billing-statement.service';

describe('Service: BillingStatement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingStatementService]
    });
  });

  it('should ...', inject([BillingStatementService], (service: BillingStatementService) => {
    expect(service).toBeTruthy();
  }));
});
