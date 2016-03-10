import {Injectable} from 'angular2/core';

import {TAGLIST} from './mock-taglist';
import {REPOLIST} from './mock-repolist';

@Injectable()
export class GithubService {
    
  getTaglist() {
    return Promise.resolve(TAGLIST);
  }
  
  getRepolist() {
    return Promise.resolve(REPOLIST);
  }
  
}
