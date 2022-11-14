import { TestBed } from '@angular/core/testing';

import { Dialog2Service } from './dialog2.service';

describe('Dialog2Service', () => {
  let service: Dialog2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dialog2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
