import { NgModule } from '@angular/core';
import { MessageComponent } from './message';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [MessageComponent],
	imports: [
    IonicPageModule.forChild(MessageComponent)
  ],
	exports: [MessageComponent]
})
export class MessageModule {}
