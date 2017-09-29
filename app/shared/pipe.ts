import { Pipe, PipeTransform } from '@angular/core';

import { Node } from './node';

@Pipe({
    name: 'nodefilter',
    pure: false
})
export class ClientFilterPipe implements PipeTransform {
  transform(items: Node[], filter: Node): Node[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item: Node) => this.applyFilter(item, filter));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {Node} Client 
   * @param {Node} filter 
   * @return {boolean} 
   */
  applyFilter(client: Node, filter: Node): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (client[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (client[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}