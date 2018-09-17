import { NgModule } from '@angular/core';
import { MediaComponent } from './media';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [MediaComponent],
	imports: [
    IonicPageModule.forChild(MediaComponent)
  ],
	exports: [MediaComponent]
})
export class MediaModule {}
