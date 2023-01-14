/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AicsVoucherService } from './aics-voucher.service';

describe('Service: AicsVoucher', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AicsVoucherService]
    });
  });

  it('should ...', inject([AicsVoucherService], (service: AicsVoucherService) => {
    expect(service).toBeTruthy();
  }));
});
