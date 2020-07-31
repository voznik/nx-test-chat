import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ChatFormComponent {
  smiles = ['🙂', '🙃', '😂', '😙'];
  @Input() text: string;
  @Output() send = new EventEmitter<string>();
  constructor() {}

  onSmileClick(smile: string) {
    this.text = this.text + smile;
  }

  onSubmit(tm: NgModel) {
    if (tm.valid && tm.value.length && tm.value.length >= 3) {
      this.send.emit(tm.value.trim());
      tm.reset();
    }
  }
}
