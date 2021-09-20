import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { product } from '../product.model';
import { ProductsService } from '../core/services/porducts/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})


export class ProductDetailComponent implements OnInit {
  /**la variable product almacenara nuestros datos proveidas por el 
   * servicio
   */
  product: product;
  constructor( 
    private route: ActivatedRoute,
    private productService: ProductsService
    ) { }

  ngOnInit(): void {
    /**aqui podemos recoger los parametros */
    this.route.params.subscribe((params: Params)=>{
      const id = params.id
      this.product = this.productService.getProduct(id)
    })
  }

}
