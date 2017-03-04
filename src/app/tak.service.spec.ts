import { TestBed, inject } from '@angular/core/testing';

import { TakService } from './tak.service';

describe('TakService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TakService]
    });
  });

  it('should ...', inject([TakService], (service: TakService) => {
    expect(service).toBeTruthy();
  }));
});
