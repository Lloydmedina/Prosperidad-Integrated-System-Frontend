/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceProviderService } from './service-provider.service';

describe('Service: ServiceProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceProviderService]
    });
  });

  it('should ...', inject([ServiceProviderService], (service: ServiceProviderService) => {
    expect(service).toBeTruthy();
  }));
});
