import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Message, User } from '@test-chat/data';
import { merge, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
//
import { ChatDataService, ChatSessionService } from '../../services';

@Component({
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatComponent implements OnInit {
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

  constructor(
    private chatService: ChatDataService,
    private sessionService: ChatSessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sessionService.currentUser$.subscribe(
      (user) => (this.currentUser = user as User)
    );
    this.chatService.connectSocket();
    this.chatService.sendEvent('chat');
    this.chatService.sendEvent('users');
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
    window.location.reload(); // soeey for this shit
  }
}
