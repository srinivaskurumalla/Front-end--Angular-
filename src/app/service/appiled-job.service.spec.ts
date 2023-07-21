import { TestBed } from '@angular/core/testing';

import { AppiledJobService } from './appiled-job.service';

describe('AppiledJobService', () => {
  let service: AppiledJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppiledJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
