import {Pipe, PipeTransform} from 'angular2/core';
/*
 * Transforms a internal identifier to a human readable string.
 * 
 * Example:
 *   {{ 'the-house' | displayname }}
 *   formats to: The House
*/
@Pipe({
  name: 'displayname'
})
export class DisplaynamePipe implements PipeTransform {
  
  transform(value: string, args: string[]) : any {
    return value.split('-').map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join(' ');
  }
  
}
