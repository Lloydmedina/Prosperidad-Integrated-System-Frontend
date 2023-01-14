/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChangepasswordService } from './changepassword.service';

describe('Service: Changepassword', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangepasswordService]
    });
  });

  it('should ...', inject([ChangepasswordService], (service: ChangepasswordService) => {
    expect(service).toBeTruthy();
  }));
});
