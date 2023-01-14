/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WccDischargeService } from './wcc-discharge.service';

describe('Service: WccDischarge', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WccDischargeService]
    });
  });

  it('should ...', inject([WccDischargeService], (service: WccDischargeService) => {
    expect(service).toBeTruthy();
  }));
});
