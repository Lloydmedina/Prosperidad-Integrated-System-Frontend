/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReceivingService } from './receiving.service';

describe('Service: Receiving', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceivingService]
    });
  });

  it('should ...', inject([ReceivingService], (service: ReceivingService) => {
    expect(service).toBeTruthy();
  }));
});
