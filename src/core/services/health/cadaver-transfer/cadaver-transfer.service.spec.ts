/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CadaverTransferService } from './cadaver-transfer.service';

describe('Service: CadaverTransfer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadaverTransferService]
    });
  });

  it('should ...', inject([CadaverTransferService], (service: CadaverTransferService) => {
    expect(service).toBeTruthy();
  }));
});
