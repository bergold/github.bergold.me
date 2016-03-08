import {Component} from 'angular2/core';
import {TaglistComponent} from './taglist.component';
import {SearchComponent} from './search.component';

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
        </div>
      </div>
    </div>
  `,
  directives: [TaglistComponent, SearchComponent]
})
export class AppComponent { }
