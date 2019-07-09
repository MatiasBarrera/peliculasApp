import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortP'
})
export class ShortPPipe implements PipeTransform {

  transform(parrafo: string): any {
    if (parrafo.length <= 200) {
      return parrafo;
    } else {
      return parrafo.substr(0, 100) + '...';
    }
  }

}
