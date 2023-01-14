/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DaycareCenterService } from './daycare-center.service';

describe('Service: DaycareCenter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaycareCenterService]
    });
  });

  it('should ...', inject([DaycareCenterService], (service: DaycareCenterService) => {
    expect(service).toBeTruthy();
  }));
});
