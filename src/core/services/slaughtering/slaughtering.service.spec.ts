/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SlaughteringService } from './slaughtering.service';

describe('Service: Slaughtering', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlaughteringService]
    });
  });

  it('should ...', inject([SlaughteringService], (service: SlaughteringService) => {
    expect(service).toBeTruthy();
  }));
});
