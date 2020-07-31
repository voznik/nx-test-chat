import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@test-chat/web/ui';
//
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './containers/chat/chat.component';
import {
  ChatListComponent,
  ChatFormComponent,
  ChatUsersComponent,
  ChatLoginComponent,
} from './components';
import { ChatDataService, ChatGuard, ChatSessionService } from './services';

@NgModule({
  imports: [CommonModule, ChatRoutingModule, UiModule],
  declarations: [
    ChatComponent,
    ChatListComponent,
    ChatFormComponent,
    ChatUsersComponent,
    ChatLoginComponent,
  ],
  providers: [ChatDataService, ChatGuard, ChatSessionService],
})
export class ChatModule {}
