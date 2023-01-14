/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WaitlistedReportService } from './waitlisted-report.service';

describe('Service: WaitlistedReport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaitlistedReportService]
    });
  });

  it('should ...', inject([WaitlistedReportService], (service: WaitlistedReportService) => {
    expect(service).toBeTruthy();
  }));
});
