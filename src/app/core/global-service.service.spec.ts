/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalServiceService } from './global-service.service';

describe('Service: GlobalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalServiceService]
    });
  });

  it('should ...', inject([GlobalServiceService], (service: GlobalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
