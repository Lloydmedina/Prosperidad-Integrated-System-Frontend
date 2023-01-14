/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectLguService } from './project-lgu.service';

describe('Service: ProjectLgu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectLguService]
    });
  });

  it('should ...', inject([ProjectLguService], (service: ProjectLguService) => {
    expect(service).toBeTruthy();
  }));
});
