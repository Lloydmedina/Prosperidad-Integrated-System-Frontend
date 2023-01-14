/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OscaService } from './osca.service';

describe('Service: Osca', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OscaService]
    });
  });

  it('should ...', inject([OscaService], (service: OscaService) => {
    expect(service).toBeTruthy();
  }));
});
