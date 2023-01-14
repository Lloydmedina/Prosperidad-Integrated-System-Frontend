/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountTitleService } from './account-title.service';

describe('Service: AccountTitle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountTitleService]
    });
  });

  it('should ...', inject([AccountTitleService], (service: AccountTitleService) => {
    expect(service).toBeTruthy();
  }));
});
