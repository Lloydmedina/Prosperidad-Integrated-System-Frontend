/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Slaughterhouse_recordsService } from './slaughterhouse_records.service';

describe('Service: Slaughterhouse_records', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Slaughterhouse_recordsService]
    });
  });

  it('should ...', inject([Slaughterhouse_recordsService], (service: Slaughterhouse_recordsService) => {
    expect(service).toBeTruthy();
  }));
});
