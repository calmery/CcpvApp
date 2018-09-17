import { Component, Input } from '@angular/core';

@Component({
  selector: 'tweet',
  templateUrl: 'tweet.html'
})
export class TweetComponent {
  @Input() tweet: any;
  @Input() isSafe: boolean;

  @Input() callback: any;

  public user: any;
  public media: any;
  public mentions: any;

  constructor() {}

  public ngOnInit() {
    this.user = this.tweet.user;
    this.media = this.tweet.media;
    this.mentions = this.tweet.mentions;
  }

  public changeSafeStatus() {
    this.isSafe = !this.isSafe;
    this.callback(this.tweet.id, this.isSafe);
  }

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
