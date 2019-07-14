import { BrowserModule } from '@angular/platform-browser'; //to run in browsers
import { NgModule } from '@angular/core'; //use to get the angular modules
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product/product-form.component';
import { ParentFinderComponent } from './report/parent-finder.component';
import { ClothingComponent } from './report/clothing.component';
import { PantsComponent } from './report/pants.component';
import { ShirtComponent } from './report/shirt.component';
import { SkirtComponent } from './report/skirt.component';

const parentFinder = [ParentFinderComponent, ClothingComponent, ShirtComponent, SkirtComponent, PantsComponent];

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductComponent,
    parentFinder
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent] //run this component
})

export class AppModule { }
