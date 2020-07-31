import { TestBed } from '@angular/core/testing';

import { ChatGuard } from './chat-guard.guard';

describe('ChatGuardGuard', () => {
  let guard: ChatGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChatGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
