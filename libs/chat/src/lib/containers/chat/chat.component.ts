import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Message, User } from '@test-chat/data';
import { DataService } from '@test-chat/web/core';
import { Observable, of } from 'rxjs';
//
import { ChatDataService, ChatSessionService } from '../../services';

@Component({
  // selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatComponent implements OnInit {
  currentUser: User = null;
  currentUserName = '';
  users$: Observable<User[]> = this.chatService.chatUsers$;
  messages$: Observable<Message[]> = this.chatService.chatMessages$;
  connection$ = this.chatService.connection$;
  messageInput = '';

  constructor(
    private chatService: ChatDataService,
    private sessionService: ChatSessionService
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
}
