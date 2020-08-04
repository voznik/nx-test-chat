import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatSessionService } from '../../services';

@Component({
  selector: 'test-chat-chat-login',
  templateUrl: './chat-login.component.html',
  styleUrls: ['./chat-login.component.scss'],
})
export class ChatLoginComponent implements OnInit {
  username = null;
  constructor(
    private sessionService: ChatSessionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  sendUserInfo(tm: NgModel) {
    if (tm.valid && tm.value.length && tm.value.length >= 3) {
      this.sessionService.enterChat(tm.value.trim());
      tm.reset();
      this.router.navigate(['/chat/room']);
    }
  }
}
