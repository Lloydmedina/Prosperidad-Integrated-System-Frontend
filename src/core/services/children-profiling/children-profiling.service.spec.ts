import { TestBed } from '@angular/core/testing';

import { ChildrenProfilingService } from './children-profiling.service';

describe('ChildrenProfilingService', () => {
  let service: ChildrenProfilingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildrenProfilingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
