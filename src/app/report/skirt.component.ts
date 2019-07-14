import { Component, Optional } from '@angular/core'
import { Parent } from './parent-finder.component'

@Component({
    selector: 'skirt',
    template: ` <div class="c">
                    <h3>{{name}}</h3>
                    <p>My parent is {{parent?.name}}</p>
                </div>`
})
export class SkirtComponent {
    name = 'Skirt';
    constructor(@Optional() public parent: Parent) { }
}