/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HealthCardService } from './health-card.service';

describe('Service: HealthCard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthCardService]
    });
  });

  it('should ...', inject([HealthCardService], (service: HealthCardService) => {
    expect(service).toBeTruthy();
  }));
});
