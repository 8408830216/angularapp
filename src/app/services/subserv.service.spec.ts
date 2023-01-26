import { TestBed } from '@angular/core/testing';

import { SubservService } from './subserv.service';

describe('SubservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubservService = TestBed.get(SubservService);
    expect(service).toBeTruthy();
  });
});
