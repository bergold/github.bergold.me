import {Component} from 'angular2/core';
import {Tag} from './github';
import {DisplaynamePipe} from './displayname.pipe';

@Component({
  selector: 'my-taglist',
  template: `
    <div>
      <h2>Tags</h2>
      <ul class="tags">
        <li *ngFor="#tag of tags" (click)="doSearch('tag:' + tag.name)">
          <span>{{tag.name | displayname}}</span>
        </li>
      </ul>
    </div>
  `,
  pipes: [DisplaynamePipe]
})
export class TaglistComponent {
  public tags: Tag[] = [
    { "name": "electronics" },
    { "name": "web" },
    { "name": "arduino" },
    { "name": "mobile-app" }
  ];
  
  doSearch(query) {
    console.log('doSearch', query);
  }
}
