/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EvacuationCenterService } from './evacuation-center.service';

describe('Service: EvacuationCenter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvacuationCenterService]
    });
  });

  it('should ...', inject([EvacuationCenterService], (service: EvacuationCenterService) => {
    expect(service).toBeTruthy();
  }));
});
