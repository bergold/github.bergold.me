import {Component, OnInit} from 'angular2/core';
import {TaglistComponent} from './taglist.component';
import {RepolistComponent} from './repolist.component';
import {SearchComponent} from './search.component';
import {GithubService} from './github.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [TaglistComponent, RepolistComponent, SearchComponent],
  providers: [GithubService]
})
export class AppComponent implements OnInit {
  
  constructor(private _githubService: GithubService) {}
  
  ngOnInit() {
    
  }
  
}
