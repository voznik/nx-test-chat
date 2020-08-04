import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message, User } from '@test-chat/data';
import { DataService } from '@test-chat/web/core';
import { filter, map, tap } from 'rxjs/operators';
import { ChatSessionService } from './chat-session.service';

@Injectable()
export class ChatDataService {
  chatMessages$ = this.dataService.stream$.pipe(
    filter((e: any) => e.event === 'messages'),
    map((e) => e['data'])
  );
  chatUsers$ = this.dataService.stream$.pipe(
    filter((e: any) => e.event === 'users'),
    map((e) => e['data']),
    tap({
      complete: () => {
        // this.sessionService.exitChat(); // TODO: when to exit chat
      },
    })
  );
  connection$ = this.dataService.connection$;

  private connectionOptions: any = {
    reconnect: false,
    queryParams: '',
  };

  constructor(
    private dataService: DataService,
    private sessionService: ChatSessionService,
    private _http: HttpClient
  ) {}

  connectSocket() {
    const userName = this.sessionService.getCurrentUserName();
    this.connectionOptions.queryParams = `chatUser=${userName}`;
    this.dataService.connect(this.connectionOptions);
  }

  disconnectSocket() {
    this.dataService.disconnect();
    this.sessionService.exitChat();
  }

  sendEvent(event: string) {
    this.dataService.sendMessage(event);
  }

  sendChatMessage(message: Partial<Message>) {
    this.dataService.sendMessage('chatMessage', message);
  }

  getUsers() {
    return this._http.get<User[]>('/api/users');
  }
}
