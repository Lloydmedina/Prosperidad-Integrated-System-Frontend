/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AicsService } from './aics.service';

describe('Service: Aics', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AicsService]
    });
  });

  it('should ...', inject([AicsService], (service: AicsService) => {
    expect(service).toBeTruthy();
  }));
});
