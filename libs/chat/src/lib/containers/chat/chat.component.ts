import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Message, User } from '@test-chat/data';
import { merge, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
//
import { ChatDataService, ChatSessionService } from '../../services';

const DEFAULT_DURATION = 1000;

@Component({
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatComponent implements OnInit, OnDestroy {
  currentUser: User = null;
  currentUserName = '';
  messageInput = '';
  connection$ = this.chatService.connection$;
  users$: Observable<User[]> = this.chatService.chatUsers$;
  messages$: Observable<Message[]> = this.chatService.chatMessages$;
  // Observable of local messages
  localMessages$: Observable<
    Message[]
  > = this.sessionService.storageEvents$.pipe(
    filter((event: StorageEvent) => event.key === 'messages'),
    map((event) => JSON.parse(event.newValue) as Message[])
  );

  __messages$: Observable<Message[]> = merge(
    this.chatService.chatMessages$,
    this.localMessages$
  );

  private destroy$ = new Subject();

  constructor(
    private chatService: ChatDataService,
    private sessionService: ChatSessionService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.sessionService.currentUser$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => (this.currentUser = user as User));
    this.connection$
      .pipe(takeUntil(this.destroy$))
      .subscribe((connected) =>
        this.openSnackBar(
          connected ? 'Socket connected' : 'Socket disconnected'
        )
      );
    this.chatService.connectSocket();
    this.chatService.sendEvent('chat');
    this.chatService.sendEvent('users');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  userNameClicked(user: User) {
    const userMention = `@${user.name}`;
    if (!this.messageInput || !this.messageInput.includes(userMention)) {
      this.messageInput = this.messageInput + userMention + ' ';
    }
  }

  sendMessage(event: string) {
    this.chatService.sendChatMessage({
      message: event,
      user: this.currentUser,
    });
    this.messageInput = null;
  }

  exitChat() {
    this.chatService.disconnectSocket();
    this.router.navigate(['/chat/enter']);
    // window.location.reload(); // soeey for this shit
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: DEFAULT_DURATION,
    });
  }
}
