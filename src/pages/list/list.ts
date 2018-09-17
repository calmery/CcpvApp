import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

import { AuthenticationProvider } from '../../providers/authentication';
import { ListProvider } from '../../providers/list';

import { List } from '../../models';

@IonicPage({
  name: 'list',
  segment: 'list'
})
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  private lists: List[] = [];
  private loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private authenticationProvider: AuthenticationProvider,
    private listProvider: ListProvider,
    private loadingCtrl: LoadingController
  ) {
    if (!authenticationProvider.isAuthenticated) {
      this.navCtrl.setRoot('top');
    }
  }

  public ionViewDidLoad() {
    this.authenticationProvider
      .getObserver()
      .subscribe(isAuthenticated => {
        if (!isAuthenticated) {
          this.navCtrl.setRoot('top');
        }
      });

    this.getMyLists();
  }

  public async getMyLists() {
    try {
      this.loading = this.loadingCtrl.create();
      this.loading.present();
      this.lists = await this.listProvider.getMyLists();
    } catch (error) {
      await this.alertCtrl.create({
        title: 'リストの取得に失敗しました',
        buttons: [{
          text: 'キャンセル',
          role: 'cancel',
          handler: () => {
            // どこかのページから移動してきた場合はそのページに戻る
            if (this.navCtrl.length() > 1) {
              this.navCtrl.pop();
              return;
            }

            // 直接このページを開いている場合はトップページに戻る
            this.navCtrl.setRoot('top');
          }
        }, {
          text: '再試行',
          handler: () => {
            this.getMyLists();
          }
        }]
      }).present();
    } finally {
      this.loading.dismiss();
    }
  }

  public displayDate(list: List) {
    const time = new Date(list.updated_at);

    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();

    return `${year}/${(month < 10 ? '0' : '') + month}/${(date < 10 ? '0' : '') + date}`;
  }

  public open(list: List) {
    this.navCtrl.push('edit', list);
  }

  public async doRefresh(refresher) {
    await this.getMyLists();
    refresher.complete();
  }

  /** 検索ワードを入力するプロンプトを表示する */
  public openSearch() {
    const prompt = this.alertCtrl.create({
      title: '検索',
      inputs: [{
        name: 'name',
        placeholder: '名前'
      }, {
        name: 'query',
        placeholder: 'キーワード'
      }],
      buttons: [{
        text: 'キャンセル',
        role: 'cancel'
      }, {
        text: '検索',
        handler: ({ name, query }) => {
          this.createList(name, query);
        }
      }]
    });

    prompt.present();
  }

  /** 新規リストを作成する */
  private async createList(name, query) {
    this.loading = this.loadingCtrl.create();
    this.loading.present();

    if (name === '' || query === '') {
      await this.alertCtrl.create({
        title: '検索できませんでした',
        message: '名前，またキーワードは少なくとも 1 文字以上である必要があります',
        buttons: ['閉じる']
      }).present();

      this.loading.dismiss();

      return;
    }

    let isSucceeded = false;

    try {
      await this.listProvider.new(name, query);
      isSucceeded = true;
    } catch (error) {
      await this.alertCtrl.create({
        title: '検索に失敗しました',
        buttons: [{
          text: 'キャンセル',
          role: 'cancel'
        }, {
          text: '再試行',
          handler: () => {
            this.createList(name, query);
          }
        }]
      }).present();
    }

    this.loading.dismiss();

    if (isSucceeded) {
      // リストを再取得する
      this.getMyLists();
    }
  }

}
