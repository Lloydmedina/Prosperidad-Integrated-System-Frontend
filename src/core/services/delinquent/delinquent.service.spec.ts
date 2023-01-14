/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DelinquentService } from './delinquent.service';

describe('Service: Delinquent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DelinquentService]
    });
  });

  it('should ...', inject([DelinquentService], (service: DelinquentService) => {
    expect(service).toBeTruthy();
  }));
});
