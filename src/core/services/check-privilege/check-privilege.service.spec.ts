/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckPrivilegeService } from './check-privilege.service';

describe('Service: CheckPrivelege', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckPrivilegeService]
    });
  });

  it('should ...', inject([CheckPrivilegeService], (service: CheckPrivilegeService) => {
    expect(service).toBeTruthy();
  }));
});
