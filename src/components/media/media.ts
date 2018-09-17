import { Component, Input } from '@angular/core';
import { Media } from '../../models';

@Component({
  selector: 'media',
  templateUrl: 'media.html'
})
export class MediaComponent {
  @Input() media: Media[];

  public photos: string[] = [];

  constructor() {}

  public ngOnInit() {
    this.media.forEach(media => {
      if (media.type === 'photo') {
        this.photos.push(media.media_url);
      }
    });
  }

}
