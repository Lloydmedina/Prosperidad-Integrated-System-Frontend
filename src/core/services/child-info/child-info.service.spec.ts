/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChildInfoService } from './child-info.service';

describe('Service: ChildInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildInfoService]
    });
  });

  it('should ...', inject([ChildInfoService], (service: ChildInfoService) => {
    expect(service).toBeTruthy();
  }));
});
