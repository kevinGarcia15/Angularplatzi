import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/porducts/products.service';


/**guarda servicios con una sola referencia de datos */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ProductsService
  ]
})
export class CoreModule { }
