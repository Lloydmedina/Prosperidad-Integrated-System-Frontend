/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DispatchingService } from './dispatching.service';

describe('Service: Dispatching', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DispatchingService]
    });
  });

  it('should ...', inject([DispatchingService], (service: DispatchingService) => {
    expect(service).toBeTruthy();
  }));
});
