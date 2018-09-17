import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
import { ListProvider } from '../../providers/list';

interface TemporaryState {
  [key: string]: boolean;
}

@IonicPage({
  name: 'edit',
  segment: 'edit/:id'
})
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  public name: string;

  public listsTweets: any[] = [];
  public temporaryState: TemporaryState = {};

  /** this.temporaryState を参照する必要があるため this をバインドした状態のメソッドを子要素に渡す */
  public changeSafeState: Function = this._changeSafeState.bind(this);

  private id: number;

  // フラグなどの状態を変更した後に保存したかどうかを保持する
  private isSaved: boolean = true;

  private loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private listProvider: ListProvider
  ) {
    this.id = this.navParams.get('id');
    this.name = this.navParams.get('name');

    // 直接ページを開いた場合，前のページに戻るかリストページに遷移する
    if (this.id === undefined || this.name === undefined) {
      if (this.navCtrl.length() > 1) {
        this.navCtrl.pop();
        return;
      }

      this.navCtrl.setRoot('list');
      return;
    }
  }

  public ionViewDidLoad() {
    this.getList();
  }

  /** 子要素にコールバック関数として渡す */
  public _changeSafeState(id: number, isSafe: boolean) {
    /*
     * 子要素にメソッドを渡さずに Edit ページ側でクリックイベントを取得してフラグを更新する
     * 子要素には変更したフラグを渡すようにしていたがうまくフラグが渡せなかったためメソッド自体を渡すようにした
     * changeDetectorRef.detectChanges を呼び出してもうまく反映されなかった
     */
    this.temporaryState[id.toString()] = isSafe;

    // 変更が加えられたため保存していない状態にする
    this.isSaved = false;
  }

  /** リストを取得する */
  public async getList() {
    try {
      this.loading = this.loadingCtrl.create();
      this.loading.present();

      const list = await this.listProvider.get(this.id);
      this.listsTweets = (list as any).lists_tweets;

      this.listsTweets.forEach(({ is_safe, tweet }) => {
        this.temporaryState[tweet.id.toString()] = is_safe;
      });
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

            // 直接このページを開いている場合はリストページに戻る
            this.navCtrl.setRoot('list');
          }
        }, {
          text: '再試行',
          handler: () => {
            this.getList();
          }
        }]
      }).present();
    } finally {
      this.loading.dismiss();
    }
  }

  public async save() {
    try {
      this.loading = this.loadingCtrl.create();
      this.loading.present();

      const array = [];

      for (let key in this.temporaryState) {
        array.push({
          id: key,
          is_safe: this.temporaryState[key]
        });
      }

      await this.listProvider.post(
        this.id,
        array
      );

      this.isSaved = true;
    } catch(error) {
      this.alertCtrl.create({
        title: '保存に失敗しました',
        buttons: [{
          text: 'キャンセル',
          role: 'cancel'
        }, {
          text: '再試行',
          handler: () => {
            this.save();
          }
        }]
      }).present();
    } finally {
      this.loading.dismiss();
    }
  }

  /** 保存が完了していない場合は前のページに戻るかを確認する */
  public ionViewCanLeave(): Promise<boolean> {
    return new Promise((resolve) => {
      if (!this.isSaved) {
        this.alertCtrl.create({
          title: '保存せずに終了しますか？',
          buttons: [{
            text: 'キャンセル',
            role: 'cancel',
            handler: () => {
              resolve(false);
            }
          }, {
            text: '終了',
            handler: () => {
              resolve(true);
            }
          }]
        }).present();
      } else {
        resolve(true);
      }
    });
  }

}
