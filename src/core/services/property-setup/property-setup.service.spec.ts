/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PropertySetupService } from './property-setup.service';

describe('Service: PropertySetup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertySetupService]
    });
  });

  it('should ...', inject([PropertySetupService], (service: PropertySetupService) => {
    expect(service).toBeTruthy();
  }));
});
