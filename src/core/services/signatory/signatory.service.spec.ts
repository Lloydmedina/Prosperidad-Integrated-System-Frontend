/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignatoryService } from './signatory.service';

describe('Service: Signatory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignatoryService]
    });
  });

  it('should ...', inject([SignatoryService], (service: SignatoryService) => {
    expect(service).toBeTruthy();
  }));
});
