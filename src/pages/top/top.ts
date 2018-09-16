import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the TopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'top',
  segment: 'top'
})
@Component({
  selector: 'page-top',
  templateUrl: 'top.html',
})
export class TopPage {

  private loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  /** 検索ワードを入力するプロンプトを表示する */
  public openSearch() {
    const prompt = this.alertCtrl.create({
      title: '検索',
      inputs: [{
        name: 'name',
        placeholder: '名前'
      }, {
        name: 'keyword',
        placeholder: 'キーワード'
      }],
      buttons: [{
        text: 'キャンセル',
        role: 'cancel'
      }, {
        text: '検索',
        handler: ({ name, keyword }) => {
          this.loading = this.loadingCtrl.create();
          this.loading.present();
          console.log(name, keyword)
          setTimeout(() => {
            this.loading.dismiss();
          }, 3000)
        }
      }]
    });

    prompt.present();
  }

}
