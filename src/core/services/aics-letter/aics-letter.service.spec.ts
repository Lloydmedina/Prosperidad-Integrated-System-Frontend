/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AicsLetterService } from './aics-letter.service';

describe('Service: AicsLetter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AicsLetterService]
    });
  });

  it('should ...', inject([AicsLetterService], (service: AicsLetterService) => {
    expect(service).toBeTruthy();
  }));
});
