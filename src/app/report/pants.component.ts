import { Component, Optional } from '@angular/core';
import { ClothingComponent } from './clothing.component';

//Child Component
@Component({
  selector: 'pants',
  template: `
    <div class="c">
      <h3>{{name}}</h3>
      {{clothing ? 'Found' : 'Did not find'}} 
      {{parent_name}} Parent Component via the component class.<br>
    </div>
    `
})
export class PantsComponent {
  name: string = 'Pants';
  parent_name: string = this.clothing.name;

  constructor(@Optional() public clothing: ClothingComponent) { }


}