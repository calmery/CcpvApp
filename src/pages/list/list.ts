import { Component, ChangeDetectorRef } from '@angular/core';
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
    } catch(error) {
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

  public open(list: List) {
    this.navCtrl.push('edit', list);
  }

  public async doRefresh(refresher) {
    await this.getMyLists();
    refresher.complete();
  }

}
