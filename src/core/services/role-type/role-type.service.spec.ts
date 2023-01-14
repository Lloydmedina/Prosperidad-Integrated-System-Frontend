/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoleTypeService } from './role-type.service';

describe('Service: RoleType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleTypeService]
    });
  });

  it('should ...', inject([RoleTypeService], (service: RoleTypeService) => {
    expect(service).toBeTruthy();
  }));
});
