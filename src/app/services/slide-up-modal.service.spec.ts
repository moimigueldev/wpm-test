import { TestBed } from '@angular/core/testing';

import { SlideUpModalService } from './slide-up-modal.service';

describe('SlideUpModalService', () => {
  let service: SlideUpModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideUpModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
