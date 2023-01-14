/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinancialAssistanceService } from './financial-assistance.service';

describe('Service: FinancialAssistance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinancialAssistanceService]
    });
  });

  it('should ...', inject([FinancialAssistanceService], (service: FinancialAssistanceService) => {
    expect(service).toBeTruthy();
  }));
});
