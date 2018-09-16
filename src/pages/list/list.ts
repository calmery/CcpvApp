import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Authentication } from '../../providers/authentication';

@IonicPage({
  name: 'list',
  segment: 'list'
})
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authentication: Authentication,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    if (!authentication.isAuthenticated) {
      this.navCtrl.setRoot('top');
    }
  }

  public ionViewDidLoad() {
    this.authentication
      .getObserver()
      .subscribe(isAuthenticated => {
        if (!isAuthenticated) {
          this.navCtrl.setRoot('top');
        }
      });
  }

}
