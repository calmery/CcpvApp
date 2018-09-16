import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchPage } from '../search/search';

@Component({
  selector: 'page-top',
  templateUrl: 'top.html'
})
export class TopPage {

  constructor(
    public navCtrl: NavController
  ) {

  }

  moveSearchPage() {
    this.navCtrl.push(SearchPage);
  }

}
