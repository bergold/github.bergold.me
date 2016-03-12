import {Component, OnInit} from 'angular2/core';
import {Repo} from './github';
import {GithubService} from './github.service';
import {DisplaynamePipe} from './displayname.pipe';

@Component({
  selector: 'my-repolist',
  templateUrl: 'app/repolist.component.html',
  styleUrls: ['app/repolist.component.css'],
  pipes: [DisplaynamePipe]
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
