/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnteMortemService } from './ante-mortem.service';

describe('Service: AnteMortem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnteMortemService]
    });
  });

  it('should ...', inject([AnteMortemService], (service: AnteMortemService) => {
    expect(service).toBeTruthy();
  }));
});
