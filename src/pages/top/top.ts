import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'top',
  segment: 'top'
})
@Component({
  selector: 'page-top',
  templateUrl: 'top.html',
})
export class TopPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

}
