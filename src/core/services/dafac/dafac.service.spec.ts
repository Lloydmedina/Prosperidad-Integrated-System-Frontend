/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DafacService } from './dafac.service';

describe('Service: Dafac', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DafacService]
    });
  });

  it('should ...', inject([DafacService], (service: DafacService) => {
    expect(service).toBeTruthy();
  }));
});
