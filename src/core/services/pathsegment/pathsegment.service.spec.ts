import { TestBed } from '@angular/core/testing';

import { PathsegmentService } from './pathsegment.service';

describe('PathsegmentService', () => {
  let service: PathsegmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathsegmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
