import { TestBed } from '@angular/core/testing';

import { ImagetestService } from './imagetest.service';

describe('ImagetestService', () => {
  let service: ImagetestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagetestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
