import { TestBed } from '@angular/core/testing';

import { LoginGuarsService } from './login-guars.service';

describe('LoginGuarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginGuarsService = TestBed.get(LoginGuarsService);
    expect(service).toBeTruthy();
  });
});
