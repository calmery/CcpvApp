import { Component, Input } from '@angular/core';
import { Message } from '../../models';

@Component({
  selector: 'message',
  templateUrl: 'message.html'
})
export class MessageComponent {
  @Input() message: Message;
  @Input() deleteMessage?: Function;

  constructor() {}

  public displayDate(created_at: string) {
    const time = new Date(created_at);

    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();

    const hours = time.getHours();
    const minutes = time.getMinutes();

    return `${year}/${(month < 10 ? '0' : '') + month}/${(date < 10 ? '0' : '') + date} ${hours}:${minutes}`;
  }

}
