import { TestBed } from '@angular/core/testing';

import { AdminGuarsService } from './admin-guars.service';

describe('AdminGuarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminGuarsService = TestBed.get(AdminGuarsService);
    expect(service).toBeTruthy();
  });
});
