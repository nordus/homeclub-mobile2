import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the KeyValue pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'keyValue'
})
@Injectable()
export class KeyValuePipe {
  /**
    * Takes an object and makes it iterable.
    *
    * Example:
    * 
    *  <div *ngFor="let keyValuePair of someObject | keyValue">
    *    key {{ keyValuePair.key }} and value {{ keyValuePair.value }}
    *  </div>
    *
  */
  transform(map: {}, args: any[] = null): any {
    if (!map)  return null;
    
    return Object.keys(map)
      .map((key) => ({ 'key': key, 'value': map[key] }));
  }
}
