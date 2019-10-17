import { TestBed } from '@angular/core/testing';

import { EscanearService } from './escanear.service';

describe('EscanearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EscanearService = TestBed.get(EscanearService);
    expect(service).toBeTruthy();
  });
});
