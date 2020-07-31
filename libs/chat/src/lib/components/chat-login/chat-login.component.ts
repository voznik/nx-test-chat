import { Component, OnInit } from '@angular/core';
import { ChatSessionService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'test-chat-chat-login',
  templateUrl: './chat-login.component.html',
  styleUrls: ['./chat-login.component.scss'],
})
export class ChatLoginComponent implements OnInit {
  username = '';
  constructor(
    private sessionService: ChatSessionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  sendUserInfo() {
    this.sessionService.enterChat(this.username);
    this.username = '';
    this.router.navigate(['/chat/room']);
  }
}
