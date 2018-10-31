import { TestBed } from '@angular/core/testing';

import { CalendarGuardService } from './calendar-guard.service';

describe('CalendarGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarGuardService = TestBed.get(CalendarGuardService);
    expect(service).toBeTruthy();
  });
});
