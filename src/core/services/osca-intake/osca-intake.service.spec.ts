/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OscaIntakeService } from './osca-intake.service';

describe('Service: OscaIntake', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OscaIntakeService]
    });
  });

  it('should ...', inject([OscaIntakeService], (service: OscaIntakeService) => {
    expect(service).toBeTruthy();
  }));
});
