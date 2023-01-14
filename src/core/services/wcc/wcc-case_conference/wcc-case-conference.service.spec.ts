/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WccCaseConferenceService } from './wcc-case-conference.service';

describe('Service: WccCaseConference', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WccCaseConferenceService]
    });
  });

  it('should ...', inject([WccCaseConferenceService], (service: WccCaseConferenceService) => {
    expect(service).toBeTruthy();
  }));
});
