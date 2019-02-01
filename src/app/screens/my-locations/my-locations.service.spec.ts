import { TestBed } from '@angular/core/testing';

import { MyLocationsService } from './my-locations.service';

describe('MyLocationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLocationsService = TestBed.get(MyLocationsService);
    expect(service).toBeTruthy();
  });
});
