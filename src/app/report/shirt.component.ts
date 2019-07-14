import { Component, Optional } from '@angular/core'
import { Base } from './parent-finder.component'

@Component({
    selector: 'shirt',
    template: `
    <div class="c">
      <h3>{{name}}</h3>
      {{clothing ? 'Found' : 'Did not find'}} Clothing via the base class.
    </div>`
})
export class ShirtComponent {
    name: string = 'Shirt';
    constructor(@Optional() public clothing: Base) { }
}