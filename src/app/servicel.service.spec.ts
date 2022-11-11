import { TestBed } from '@angular/core/testing';

import { ServicelService } from './servicel.service';

describe('ServicelService', () => {
  let service: ServicelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
