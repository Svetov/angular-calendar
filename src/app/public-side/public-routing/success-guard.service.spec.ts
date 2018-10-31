import { TestBed } from '@angular/core/testing';

import { SuccessGuardService } from './success-guard.service';

describe('SuccessGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuccessGuardService = TestBed.get(SuccessGuardService);
    expect(service).toBeTruthy();
  });
});
