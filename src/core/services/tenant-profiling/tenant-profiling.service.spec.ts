/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TenantProfilingService } from './tenant-profiling.service';

describe('Service: TenantProfiling', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TenantProfilingService]
    });
  });

  it('should ...', inject([TenantProfilingService], (service: TenantProfilingService) => {
    expect(service).toBeTruthy();
  }));
});
