import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import { User } from '@test-chat/data';

const KEY = 'chatUser';

@Injectable()
export class ChatSessionService {
  private currentUser = new BehaviorSubject<Partial<User>>(null);
  currentUser$ = this.currentUser.asObservable();

  constructor() {
    const existing = JSON.parse(window.sessionStorage.getItem(KEY));
    if (existing) {
      this.currentUser.next(existing);
    }
  }

  getCurrentUserName() {
    const existing = JSON.parse(window.sessionStorage.getItem(KEY));
    return existing.name;
  }

  enterChat(name: string) {
    this.currentUser.next({ name });
    window.sessionStorage.setItem(KEY, JSON.stringify({ name }));
  }

  exitChat() {
    this.currentUser.next(null);
    this.currentUser.complete();
    window.sessionStorage.removeItem(KEY);
  }
}
