import { UseGuards } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Message } from '@test-chat/data';
import { Request } from 'express';
import { Server } from 'ws';
import { AppLogger } from '../app.logger';
import { ChatUsersService } from './chat-users.service';
import { ChatAuthGuard } from './chat.guard';
import { ChatService } from './chat.service';
import { environment } from '@test-chat/env/environment';

enum WS_STATE {
  CONNECTING_STATE = 0,
  OPEN_STATE = 1,
  CLOSING_STATE = 2,
  CLOSED_STATE = 3,
}

@WebSocketGateway(environment.wsPort)
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(
    private logger: AppLogger,
    private chatService: ChatService,
    private usersService: ChatUsersService
  ) {
    this.logger.setContext('ChatGateway');
  }

  handleConnection(client: any, req: Request) {
    // extract user credentials and data from request,
    const userName = this.parseParamFromReqUrl(req.url, 'chatUser');
    if (!userName) {
      this.logger.error('Unauthorized');
      client._socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      client._socket.destroy();
      return;
    }
    // A client has connected
    this.logger.log('connection ok');
    this.usersService.addUser(userName);
    // Notify connected clients of current users
    const event = this.prepareEvent('users', this.usersService.getAll());
    this.broadcast(event, client);
  }

  handleDisconnect(client: any) {
    // A client has disconnected
    this.logger.log('connection closed');
    // Notify connected clients of current users
    const event = this.prepareEvent('users', this.usersService.getAll());
    this.broadcast(event, client);
  }

  @UseGuards(ChatAuthGuard)
  @SubscribeMessage('chat')
  onChatEvent(@MessageBody() message: Message): WsResponse<any> {
    this.logger.log('onChatEvent');
    const data = this.chatService.getAll();
    return { event: 'messages', data };
  }

  @UseGuards(ChatAuthGuard)
  @SubscribeMessage('chatSeed')
  onChatSeedEvent(@ConnectedSocket() client: WebSocket): WsResponse<any> {
    this.logger.log('onChatSeed');
    const data = this.chatService.prePoulate(10);
    return { event: 'messages', data };
  }

  @SubscribeMessage('chatMessage')
  onChatMessageEvent(@MessageBody() message: Message) {
    this.logger.log('onChatMessageEvent');
    const user = this.usersService.findByName(message.user.name);
    this.chatService.create({ ...message, user, date: Date.now() });
    const data = this.chatService.getAll();
    const event = this.prepareEvent('messages', data);
    this.broadcast(event);
  }

  @SubscribeMessage('users')
  onUsersEvent(): WsResponse<any> {
    this.logger.log('users');
    const data = this.usersService.getAll();
    return { event: 'users', data };
  }

  @SubscribeMessage('newUser')
  onNewUserEvent(
    @ConnectedSocket() client: WebSocket,
    @MessageBody() userName: string
  ): void {
    this.logger.log('newUser');
    this.usersService.addUser(userName);
    const data = this.usersService.getAll();
    const event = this.prepareEvent('users', data);
    this.broadcast(event, client);
  }

  @SubscribeMessage('removeUser')
  onRemoveUserEvent(
    @ConnectedSocket() client: WebSocket,
    @MessageBody() userName: string
  ): void {
    this.logger.log('removeUser');
    this.usersService.removeUser(userName);
    const data = this.usersService.getAll();
    const event = this.prepareEvent('users', data);
    this.broadcast(event, client);
  }

  private prepareEvent(event: string = 'events', data: any): string {
    return JSON.stringify({ event, data });
  }

  // Notify connected clients of current event
  private broadcast(event, currentClient?: any) {
    this.server.clients.forEach((sclient) => {
      if (sclient.readyState === WS_STATE.OPEN_STATE) {
        if (!currentClient || (currentClient && sclient !== currentClient)) {
          sclient.send(event);
        }
      }
    });
  }

  private parseParamFromReqUrl(queryString: string, param: string): any {
    const query = {};
    const pairs = queryString.slice(2).split('&');
    for (const p of pairs) {
      const pair = p.split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query[param];
  }
}
