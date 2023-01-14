/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndigentService } from './indigent.service';

describe('Service: Indigent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndigentService]
    });
  });

  it('should ...', inject([IndigentService], (service: IndigentService) => {
    expect(service).toBeTruthy();
  }));
});
