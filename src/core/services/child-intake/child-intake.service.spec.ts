/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChildIntakeService } from './child-intake.service';

describe('Service: ChildIntake', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildIntakeService]
    });
  });

  it('should ...', inject([ChildIntakeService], (service: ChildIntakeService) => {
    expect(service).toBeTruthy();
  }));
});
