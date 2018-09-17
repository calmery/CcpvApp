import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MessageProvider } from '../../providers/message';
import { Message } from '../../models';

@IonicPage({
  name: 'top',
  segment: 'top'
})
@Component({
  selector: 'page-top',
  templateUrl: 'top.html',
})
export class TopPage {

  public messages: Message[] = [];
  private next: number | null = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private messageProvider: MessageProvider
  ) {}

  public ionViewDidLoad() {
    this.getMessages();
  }

  public async getMessages() {
    try {
      const response = await this.messageProvider.get();
      this.messages = response.messages;
      this.next = response.next;
    } catch (_) {
      await this.alertCtrl.create({
        title: 'メッセージの取得に失敗しました',
        buttons: ['OK']
      }).present();
    }
  }

  public async doRefresh(refresher) {
    await this.getMessages();
    refresher.complete();
  }

  public async doInfinite(infiniteScroll) {
    if (this.next === null) {
      infiniteScroll.complete();
      return;
    }

    const response = await this.messageProvider.get(this.next);

    this.messages = this.messages.concat(response.messages);
    this.next = response.next || null;

    infiniteScroll.complete();
  }

}
