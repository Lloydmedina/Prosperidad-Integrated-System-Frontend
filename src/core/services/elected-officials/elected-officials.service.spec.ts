/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ElectedOfficialsService } from './elected-officials.service';

describe('Service: ElectedOfficials', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectedOfficialsService]
    });
  });

  it('should ...', inject([ElectedOfficialsService], (service: ElectedOfficialsService) => {
    expect(service).toBeTruthy();
  }));
});
