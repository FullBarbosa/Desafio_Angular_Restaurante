import { TestBed } from '@angular/core/testing';

import { BaseservicesService } from './baseservices.service';

describe('BaseservicesService', () => {
  let service: BaseservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
