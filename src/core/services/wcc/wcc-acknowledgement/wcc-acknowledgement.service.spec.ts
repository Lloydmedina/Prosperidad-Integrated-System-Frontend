/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WccAcknowledgementService } from './wcc-acknowledgement.service';

describe('Service: WccAcknowledgement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WccAcknowledgementService]
    });
  });

  it('should ...', inject([WccAcknowledgementService], (service: WccAcknowledgementService) => {
    expect(service).toBeTruthy();
  }));
});
