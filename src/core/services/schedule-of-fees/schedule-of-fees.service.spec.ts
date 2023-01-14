/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScheduleOfFeesService } from './schedule-of-fees.service';

describe('Service: ScheduleOfFees', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleOfFeesService]
    });
  });

  it('should ...', inject([ScheduleOfFeesService], (service: ScheduleOfFeesService) => {
    expect(service).toBeTruthy();
  }));
});
