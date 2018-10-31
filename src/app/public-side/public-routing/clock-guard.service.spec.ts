import { TestBed } from '@angular/core/testing';

import { ClockGuardService } from './clock-guard.service';

describe('ClockGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClockGuardService = TestBed.get(ClockGuardService);
    expect(service).toBeTruthy();
  });
});
