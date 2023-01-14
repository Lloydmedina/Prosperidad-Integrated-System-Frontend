/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BarangayOfficialService } from './barangay-official.service';

describe('Service: BarangayOfficial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarangayOfficialService]
    });
  });

  it('should ...', inject([BarangayOfficialService], (service: BarangayOfficialService) => {
    expect(service).toBeTruthy();
  }));
});
