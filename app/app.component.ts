import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="layout">
      <div class="layout__aside">
        <div class="layout__header">
          <div>GitHub | Bergold</div>
        </div>
        <div class="layout__nav">
        </div>
      </div>
      <div class="layout__main">
        <div class="layout__header">
          <div>Search...</div>
        </div>
        <div class="layout__content">
        </div>
      </div>
    </div>
  `
})
export class AppComponent { }
