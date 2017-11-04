import { TestBed, inject } from '@angular/core/testing';

import { ServiceNameService } from './http-interceptor.service';

describe('HttpInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceNameService]
    });
  });

  it('should be created', inject([ServiceNameService], (service: ServiceNameService) => {
    expect(service).toBeTruthy();
  }));
});
