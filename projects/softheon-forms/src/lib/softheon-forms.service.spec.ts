import { TestBed, inject } from '@angular/core/testing';

import { SoftheonFormsService } from './softheon-forms.service';

describe('SoftheonFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoftheonFormsService]
    });
  });

  it('should be created', inject([SoftheonFormsService], (service: SoftheonFormsService) => {
    expect(service).toBeTruthy();
  }));
});
