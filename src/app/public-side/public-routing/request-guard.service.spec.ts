import { TestBed } from '@angular/core/testing';

import { RequestGuardService } from './request-guard.service';

describe('RequestGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestGuardService = TestBed.get(RequestGuardService);
    expect(service).toBeTruthy();
  });
});
