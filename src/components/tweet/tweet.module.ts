import { NgModule } from '@angular/core';
import { TweetComponent } from './tweet';
import { IonicPageModule } from 'ionic-angular';
import { MediaModule } from '../media/media.module';

@NgModule({
	declarations: [TweetComponent],
	imports: [
    IonicPageModule.forChild(TweetComponent),
    MediaModule
  ],
	exports: [TweetComponent]
})
export class TweetModule {}
