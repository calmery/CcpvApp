import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { AuthenticationProvider } from '../../providers/authentication';
import { LoadingController, Loading, ToastController, Nav } from 'ionic-angular';

import { TOAST_DURATION, TOAST_POSITION } from '../../constants/constants';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  @Input() public navChild: Nav;

  public isAuthenticated: boolean;
  public isAdmin: boolean;

  private loading: Loading;

  constructor(
    private authenticationProvider: AuthenticationProvider,
    private changeDetectorRef: ChangeDetectorRef,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  public ngOnInit() {
    this.authenticationProvider
      .getObserver()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
        this.isAdmin = this.authenticationProvider.isAdmin;
        this.changeDetectorRef.detectChanges();
      });
  }

  public open(pageName: string) {
    // 現在開いているページをメニューから開こうとした場合は移動しない
    if (this.navChild.getActive().id === pageName) {
      return;
    }

    this.navChild.push(pageName);
  }

  public async signIn() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    await this.authenticationProvider.authentication();
    this.loading.dismiss();

    this.toastCtrl.create({
      message: 'ログインしました',
      duration: TOAST_DURATION,
      position: TOAST_POSITION
    }).present();
  }

  public signOut() {
    this.authenticationProvider.reset();
    this.toastCtrl.create({
      message: 'ログアウトしました',
      duration: TOAST_DURATION,
      position: TOAST_POSITION
    }).present();
  }

}
