import { TestBed } from '@angular/core/testing';

import { User7Service } from './user7.service';

describe('User7Service', () => {
  let service: User7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(User7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
