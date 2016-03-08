import {Component} from 'angular2/core';
import {Tag} from './github';

@Component({
  selector: 'my-taglist',
  template: `
    <div>
      <h2>Tags</h2>
      <ul class="tags">
        <li *ngFor="#tag of tags">
          <span>{{tag.name}}</span>
        </li>
      </ul>
    </div>
  `
})
export class TaglistComponent {
  public tags: Tag[] = [
    { "name": "Electronics" },
    { "name": "Web" },
    { "name": "Arduino" }
  ];
}
