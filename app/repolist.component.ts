import {Component, OnInit} from 'angular2/core';
import {Repo} from './github';
import {GithubService} from './github.service';

@Component({
  selector: 'my-repolist',
  template: `
    <div>
      <h2>Repos</h2>
      <ul class="repos">
        <li *ngFor="#repo of repos" (click)="openRepo(repo.id)">
          <span>{{repo.full_name}}</span>
        </li>
      </ul>
    </div>
  `
})
export class RepolistComponent implements OnInit {
  public repos: Repo[];
  
  constructor(private _githubService: GithubService) {}
  
  getRepolist() {
    this._githubService.getRepolist().then(repolist => this.repos = repolist);
  }
  
  ngOnInit() {
    this.getRepolist();
  }
  
  openRepo(repoid) {
    console.log('openRepo', repoid);
  }
}
