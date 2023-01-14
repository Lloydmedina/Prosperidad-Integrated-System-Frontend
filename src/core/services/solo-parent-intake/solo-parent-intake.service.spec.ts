/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SoloParentIntakeService } from './solo-parent-intake.service';

describe('Service: SoloParentIntake', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoloParentIntakeService]
    });
  });

  it('should ...', inject([SoloParentIntakeService], (service: SoloParentIntakeService) => {
    expect(service).toBeTruthy();
  }));
});
