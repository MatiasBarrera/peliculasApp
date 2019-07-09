import { Pipe, PipeTransform } from '@angular/core';

import { from } from 'rxjs';
@Pipe({
  name: 'urlImage'
})
export class UrlImagePipe implements PipeTransform {

  urlImage = 'http://image.tmdb.org/t/p/w300';
  constructor () {

  }
  transform(bgImg: string): any {
    if (bgImg === null || bgImg.length === 0) {
      return '../../assets/img/imgNotFound.png';
    } else {
      return this.urlImage + bgImg;
    }
  }
}
