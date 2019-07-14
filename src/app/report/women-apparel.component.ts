import {Component, forwardRef, SkipSelf, Optional} from '@angular/core';
import {Parent} from './parent-finder.component';

const templateB = `
  <div class="c">
    <div>
      <h3>{{name}}</h3>
      <p>My parent is {{parent?.name}}</p>
      <mens-apparel></mens-apparel>
    </div>
  </div>`;

@Component({
  selector:   'women-apparel',
  template:   templateB,
  providers:  [{ provide: Parent, useExisting: forwardRef(() => WomenApparelComponent) }]
})
export class WomenApparelComponent implements Parent {
  name = 'Women-apparel';
  constructor( @SkipSelf() @Optional() public parent: Parent ) { }
}