/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HealthCardFormListService } from './health-card-form-list.service';

describe('Service: HealthCardFormList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthCardFormListService]
    });
  });

  it('should ...', inject([HealthCardFormListService], (service: HealthCardFormListService) => {
    expect(service).toBeTruthy();
  }));
});
