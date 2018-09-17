import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPage } from './edit';

import { TweetModule } from '../../components/tweet/tweet.module';

@NgModule({
  declarations: [
    EditPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPage),
    TweetModule
  ],
})
export class EditPageModule {}
