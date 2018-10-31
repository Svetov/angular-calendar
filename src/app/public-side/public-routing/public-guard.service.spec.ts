import { TestBed } from '@angular/core/testing';

import { PublicGuardService } from './public-guard.service';

describe('PublicGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicGuardService = TestBed.get(PublicGuardService);
    expect(service).toBeTruthy();
  });
});
