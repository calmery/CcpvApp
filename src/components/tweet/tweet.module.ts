import { NgModule } from '@angular/core';
import { TweetComponent } from './tweet';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [TweetComponent],
	imports: [
    IonicPageModule.forChild(TweetComponent)
  ],
	exports: [TweetComponent]
})
export class TweetModule {}
