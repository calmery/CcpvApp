import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // Segment of the root page
  public rootPage: string = 'top';

  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  private async initializeApp() {
    await this.platform.ready();
  }
}
