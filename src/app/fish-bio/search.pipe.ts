import {Fish} from './fish.model';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {

    if (!term) return value;
    return (value || []).filter((fish) => keys.split(',').some(key => fish.hasOwnProperty(key) && new RegExp(term, 'gi').test(fish[key])));

  }
}