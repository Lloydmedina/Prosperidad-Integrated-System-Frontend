/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostMortemService } from './post-mortem.service';

describe('Service: PostMortem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostMortemService]
    });
  });

  it('should ...', inject([PostMortemService], (service: PostMortemService) => {
    expect(service).toBeTruthy();
  }));
});
