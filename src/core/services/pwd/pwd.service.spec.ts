/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PwdService } from './pwd.service';

describe('Service: Pwd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PwdService]
    });
  });

  it('should ...', inject([PwdService], (service: PwdService) => {
    expect(service).toBeTruthy();
  }));
});
