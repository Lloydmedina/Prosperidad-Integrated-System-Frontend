/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WccIncident_reportService } from './wcc-incident_report.service';

describe('Service: WccIncident_report', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WccIncident_reportService]
    });
  });

  it('should ...', inject([WccIncident_reportService], (service: WccIncident_reportService) => {
    expect(service).toBeTruthy();
  }));
});
