import {Component, OnInit} from 'angular2/core';
import {TaglistComponent} from './taglist.component';
import {RepolistComponent} from './repolist.component';
import {SearchComponent} from './search.component';
import {GithubService} from './github.service';

@Component({
  selector: 'my-app',
  template: `
    <div class="layout">
      <div class="layout__aside">
        <div class="layout__header">
          <div>GitHub | Bergold</div>
        </div>
        <div class="layout__nav">
          <my-taglist></my-taglist>
        </div>
      </div>
      <div class="layout__main">
        <div class="layout__header">
          <my-search></my-search>
        </div>
        <div class="layout__content">
          <my-repolist></my-repolist>
        </div>
      </div>
    </div>
  `,
  directives: [TaglistComponent, RepolistComponent, SearchComponent],
  providers: [GithubService]
})
export class AppComponent implements OnInit {
  
  constructor(private _githubService: GithubService) {}
  
  ngOnInit() {
    
  }
  
}
