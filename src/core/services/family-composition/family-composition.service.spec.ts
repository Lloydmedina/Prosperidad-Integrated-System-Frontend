/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FamilyCompositionService } from './family-composition.service';

describe('Service: FamilyComposition', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FamilyCompositionService]
    });
  });

  it('should ...', inject([FamilyCompositionService], (service: FamilyCompositionService) => {
    expect(service).toBeTruthy();
  }));
});
