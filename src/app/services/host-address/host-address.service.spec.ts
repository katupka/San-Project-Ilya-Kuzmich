import { TestBed } from '@angular/core/testing';

import { HostAddressService } from './host-address.service';

describe('HostAddressService', () => {
  let service: HostAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
