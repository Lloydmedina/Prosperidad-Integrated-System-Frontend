/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PwdIntakeService } from './pwd-intake.service';

describe('Service: PwdIntake', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PwdIntakeService]
    });
  });

  it('should ...', inject([PwdIntakeService], (service: PwdIntakeService) => {
    expect(service).toBeTruthy();
  }));
});
