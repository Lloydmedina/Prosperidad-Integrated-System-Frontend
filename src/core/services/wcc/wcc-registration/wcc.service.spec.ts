/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WccService } from './wcc.service';

describe('Service: Wcc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WccService]
    });
  });

  it('should ...', inject([WccService], (service: WccService) => {
    expect(service).toBeTruthy();
  }));
});
