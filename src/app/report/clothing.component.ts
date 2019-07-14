import { Component, forwardRef } from '@angular/core';
import { Parent, Base } from './parent-finder.component';
//Parent Component
@Component({
    selector: 'clothing',
    template: `
      <div class="a">
        <h3>{{name}}</h3>
        <pants></pants>
        <shirt></shirt>
        <skirt></skirt>
      </div>`,
    providers: [{ provide: Parent, useExisting: forwardRef(() => ClothingComponent) }],
})

export class ClothingComponent extends Base {
    name: string = 'Clothing';
    description: string = "this is description";
}
