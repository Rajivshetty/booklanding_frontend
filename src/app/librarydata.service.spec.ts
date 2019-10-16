import { TestBed } from '@angular/core/testing';

import { LibrarydataService } from './librarydata.service';

describe('LibrarydataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrarydataService = TestBed.get(LibrarydataService);
    expect(service).toBeTruthy();
  });
});
