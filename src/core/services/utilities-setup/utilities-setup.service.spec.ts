/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UtilitiesSetupService } from './utilities-setup.service';

describe('Service: UtilitiesSetup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilitiesSetupService]
    });
  });

  it('should ...', inject([UtilitiesSetupService], (service: UtilitiesSetupService) => {
    expect(service).toBeTruthy();
  }));
});
