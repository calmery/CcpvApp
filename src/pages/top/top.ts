import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';

import { Authentication } from '../../providers/authentication';

@IonicPage({
  name: 'top',
  segment: 'top'
})
@Component({
  selector: 'page-top',
  templateUrl: 'top.html',
})
export class TopPage {

  public isAuthenticated: boolean;
  private loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authentication: Authentication,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public ionViewDidLoad() {
    this.authentication
      .getObserver()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
        this.changeDetectorRef.detectChanges();
      });
  }

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
