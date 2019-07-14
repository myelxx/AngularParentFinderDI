import { Component, forwardRef } from '@angular/core'

// A component base class (see ClothingComponent)
export abstract class Base { name = 'Base Na,e'; }

// Marker class, used as an interface
export abstract class Parent { name: string; }

///////// ParentFinder //////
@Component({
    selector: 'app-parent-finder',
    template: `
      <h2>Parent Finder</h2>
      <clothing></clothing>`
})
export class ParentFinderComponent { }

// //Parent Component
// @Component({
//     selector: 'clothing',
//     template: `
//       <div class="a">
//         <h3>{{name}}</h3>
//         <pants></pants>
//         <shirt></shirt>
//         <skirt></skirt>
//       </div>`,
//       providers: [{ provide: Parent, useExisting: forwardRef(() => ClothingComponent) }],
//   })

//   export class ClothingComponent extends Base
//   {
//     name = 'Clothing';
//   }

//   //Child Component
//   @Component({
//     selector: 'pants',
//     template: `
//     <div class="c">
//       <h3>{{name}}</h3>
//       {{clothing ? 'Found' : 'Did not find'}} Clothing via the component class.<br>
//     </div>
//     <div *ngFor="let product of products">
//         <p> {{product.name}}</p>
//         <img [src]=product.imgUrl style="width:100px;">        
//     </div>
//     `
//   })
//   export class PantsComponent {
//     name: string = 'Pants';
//     products = [
//         {
//             "name": "High Waist Pants",
//             "imgUrl": "https://img.ltwebstatic.com/images/pi/201708/ae/15036240858101856719_thumbnail_600x.jpg"
//         }
//     ]
//     constructor( @Optional() public clothing: ClothingComponent ) { }
//   }

//   @Component({
//     selector: 'shirt',
//     template: `
//     <div class="c">
//       <h3>{{name}}</h3>
//       {{clothing ? 'Found' : 'Did not find'}} Clothing via the base class.
//     </div>`
//   })
//   export class ShirtComponent {
//     name: string = 'Shirt';
//     constructor( @Optional() public clothing: Base ) { }
//   }

//   @Component({
//     selector: 'skirt',
//     template: ` <div class="c">
//                     <h3>{{name}}</h3>
//                     <p>My parent is {{parent?.name}}</p>
//                 </div>`
//   })
//   export class SkirtComponent {
//     name = 'Skirt';
//     constructor( @Optional() public parent: Parent ) { }
//   }

