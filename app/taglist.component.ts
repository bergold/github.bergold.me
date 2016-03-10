import {Component, OnInit} from 'angular2/core';
import {Tag} from './github';
import {GithubService} from './github.service';
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
export class TaglistComponent implements OnInit {
  public tags: Tag[];
  
  constructor(private _githubService: GithubService) {}
  
  getTaglist() {
    this._githubService.getTaglist().then(taglist => this.tags = taglist);
  }
  
  ngOnInit() {
    this.getTaglist();
  }
  
  doSearch(query) {
    console.log('doSearch', query);
  }
}
