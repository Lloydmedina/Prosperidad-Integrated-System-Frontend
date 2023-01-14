/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WccSummary_intakeService } from './wcc-summary_intake.service';

describe('Service: WccSummary_intake', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WccSummary_intakeService]
    });
  });

  it('should ...', inject([WccSummary_intakeService], (service: WccSummary_intakeService) => {
    expect(service).toBeTruthy();
  }));
});
