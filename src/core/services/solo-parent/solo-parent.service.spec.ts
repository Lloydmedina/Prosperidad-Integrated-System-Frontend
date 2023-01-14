/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SoloParentService } from './solo-parent.service';

describe('Service: SoloParent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoloParentService]
    });
  });

  it('should ...', inject([SoloParentService], (service: SoloParentService) => {
    expect(service).toBeTruthy();
  }));
});
