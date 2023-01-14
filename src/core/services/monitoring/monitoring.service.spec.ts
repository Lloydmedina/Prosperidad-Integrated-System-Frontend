/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MonitoringService } from './monitoring.service';

describe('Service: Monitoring', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonitoringService]
    });
  });

  it('should ...', inject([MonitoringService], (service: MonitoringService) => {
    expect(service).toBeTruthy();
  }));
});
