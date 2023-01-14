/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonWithDisabilityService } from './person-with-disability.service';

describe('Service: PersonWithDisability', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonWithDisabilityService]
    });
  });

  it('should ...', inject([PersonWithDisabilityService], (service: PersonWithDisabilityService) => {
    expect(service).toBeTruthy();
  }));
});
