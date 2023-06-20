import { TestBed } from '@angular/core/testing';

import { SuthService } from './auth.service';

describe('SuthService', () => {
  let service: SuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
