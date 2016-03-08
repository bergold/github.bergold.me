import {Component} from 'angular2/core';
// import {Tag} from './github';

@Component({
  selector: 'my-search',
  template: `
    <div>
      <input type="text" placeholder="Search">
      <button type="button">Go</button>
    </div>
  `
})
export class SearchComponent {
  
}
