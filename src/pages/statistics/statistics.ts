import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication';
import { StatisticsProvider } from '../../providers/statistics';

@IonicPage({
  name: 'statistics',
  segment: 'statistics'
})
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  public safeCount: number = 0;
  public unsafeCount: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private authenticationProvider: AuthenticationProvider,
    private loadingCtrl: LoadingController,
    private statisticsProvider: StatisticsProvider
  ) {}

  public ionViewDidLoad() {
    this.getSafeAndUnSafeCount();
    this.authenticationProvider
      .getObserver()
      .subscribe(isAuthenticated => {
        if (!isAuthenticated) {
          this.navCtrl.setRoot('top');
        }
      });
  }

  public async getSafeAndUnSafeCount() {
    const loading = this.loadingCtrl.create();
    loading.present();

    try {
      const response = await this.statisticsProvider.getSafeAndUnSafeCount();

      this.safeCount = response.safe;
      this.unsafeCount = response.unsafe;
    } catch (_) {
      await this.alertCtrl.create({
        title: 'データの取得に失敗しました',
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
            this.getSafeAndUnSafeCount();
          }
        }]
      }).present();
    }

    loading.dismiss();
  }

  public async doRefresh(refresher) {
    await this.getSafeAndUnSafeCount();
    refresher.complete();
  }

}
