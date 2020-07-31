import { TestBed } from '@angular/core/testing';

import { AccessSpaService } from './access-spa.service';

describe('AccessSpaService', () => {
  let service: AccessSpaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessSpaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
