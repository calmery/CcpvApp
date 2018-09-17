import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { MessageProvider } from '../../providers/message';
import { Message } from '../../models';
import { AuthenticationProvider } from '../../providers/authentication';

@IonicPage({
  name: 'messages',
  segment: 'messages'
})
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  public messages: Message[] = [];
  private next: number | null = null;

  public deleteMessage: Function = this._deleteMessage.bind(this);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private messageProvider: MessageProvider,
    private authenticationProvider: AuthenticationProvider
  ) {
    if (!this.authenticationProvider.isAuthenticated || !this.authenticationProvider.isAdmin) {
      this.navCtrl.setRoot('top');
    }
  }

  public ionViewDidLoad() {
    this.getMessages();
    this.authenticationProvider
      .getObserver()
      .subscribe(isAuthenticated => {
        if (!isAuthenticated) {
          this.navCtrl.setRoot('top');
        }
      });
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

  /** 新規メッセージを入力するプロンプトを表示する */
  public addMessagePrompt() {
    const prompt = this.alertCtrl.create({
      title: 'メッセージ',
      inputs: [{
        name: 'title',
        placeholder: 'タイトル'
      }, {
        name: 'message',
        placeholder: 'メッセージ'
      }],
      buttons: [{
        text: 'キャンセル',
        role: 'cancel'
      }, {
        text: '検索',
        handler: ({ title, message }) => {
          if (title === '' || message === '') {
            this.alertCtrl.create({
              title: 'タイトル，メッセージは必ず入力する必要があります',
              buttons: ['OK']
            }).present();
            return;
          }

          this.addMessage(title, message);
        }
      }]
    });

    prompt.present();
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

  /** 指定されたメッセージを削除するか確認する */
  public async _deleteMessage(id: number) {
    await this.alertCtrl.create({
      title: 'このメッセージを削除しますか？',
      buttons: [{
        text: 'キャンセル',
        role: 'cancel'
      }, {
        text: '削除する',
        handler: () => {
          this.delete(id);
        }
      }]
    }).present();
  }

  /** 指定されたメッセージ ID のメッセージを削除する */
  private async delete(id) {
    const loading = this.loadingCtrl.create();
    loading.present();

    try {
      await this.messageProvider.delete(id);
      await this.alertCtrl.create({
        title: '削除しました',
        buttons: ['OK']
      }).present();

      this.getMessages();
    } catch (_) {
      await this.alertCtrl.create({
        title: 'メッセージの削除に失敗しました',
        buttons: [{
          text: 'キャンセル',
          role: 'cancel'
        }, {
          text: '再試行',
          handler: () => {
            this.delete(id);
          }
        }]
      }).present();
    }

    loading.dismiss();
  }

  private async addMessage(title: string, message: string) {
    const loading = this.loadingCtrl.create();
    loading.present();

    try {
      await this.messageProvider.post(title, message);
      this.getMessages();
    } catch (error) {
      await this.alertCtrl.create({
        title: 'メッセージの作成に失敗しました',
        buttons: [{
          text: 'キャンセル',
          role: 'cancel'
        }, {
          text: '再試行',
          handler: () => {
            this.addMessage(title, message);
          }
        }]
      }).present();
    }

    loading.dismiss();
  }

}
