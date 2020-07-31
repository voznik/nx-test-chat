import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { User } from '@test-chat/data';

@Component({
  selector: 'chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['./chat-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatUsersComponent implements OnInit {
  @Input() currentUser: User;
  @Input() users = [];
  @Output() userClicked = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}

  onUserClick(e: Event, user: User): void {
    e.preventDefault();
    this.userClicked.emit(user);
  }
}
