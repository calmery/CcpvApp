import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthenticationProvider } from '../../providers/authentication';
import { ListProvider } from '../../providers/list';

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
    private authenticationProvider: AuthenticationProvider,
    private listProvider: ListProvider,
    private changeDetectorRef: ChangeDetectorRef
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
  }

}
