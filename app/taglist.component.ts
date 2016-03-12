import {Component, OnInit} from 'angular2/core';
import {Tag} from './github';
import {GithubService} from './github.service';
import {DisplaynamePipe} from './displayname.pipe';

@Component({
  selector: 'my-taglist',
  templateUrl: 'app/taglist.component.html',
  styleUrls: ['app/taglist.component.css'],
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
