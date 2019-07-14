import {Component, forwardRef, SkipSelf, Optional} from '@angular/core';
import {Parent} from './parent-finder.component';

const templateB = `
  <div class="c">
    <div>
      <h3>{{name}}</h3>
      <p>My parent is {{parent?.name}}</p>
      <skirt></skirt>
    </div>
  </div>`;

@Component({
  selector:   'mens-apparel',
  template:   templateB,
  providers:  [{ provide: Parent, useExisting: forwardRef(() => MensApparelComponent) }]
})
export class MensApparelComponent implements Parent {
  name = 'Mens-apparel';
  constructor( @SkipSelf() @Optional() public parent: Parent ) { }
}