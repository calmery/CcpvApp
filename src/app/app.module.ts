import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

// Menu

import { MenuModule } from '../components/menu/menu.module';

// Providers

import { AuthenticationProvider } from '../providers/authentication';
import { ListProvider } from '../providers/list';
import { MessageProvider } from '../providers/message';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsProvider } from '../providers/statistics';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md'
    }),
    MenuModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    AuthenticationProvider,
    ListProvider,
    MessageProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StatisticsProvider,
  ]
})
export class AppModule {}
