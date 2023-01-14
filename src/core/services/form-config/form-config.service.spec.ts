/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormConfigService } from './form-config.service';

describe('Service: FormConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormConfigService]
    });
  });

  it('should ...', inject([FormConfigService], (service: FormConfigService) => {
    expect(service).toBeTruthy();
  }));
});
