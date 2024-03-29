import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { product } from '../../../product.model';
import { ProductsService } from '../../../core/services/porducts/products.service';

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
      this.fetchProduct(id);

      //this.product = this.productService.getProduct(id)
    })
  }

  fetchProduct(id: string){
    this.productService.getProduct(id)
    .subscribe(product => {
      this.product = product
    })
  }

  createProduct(){
    const newProducto: product = {
      id:'223',
      title:'Produto 2021',
      image:'https://images.pexels.com/photos/7659526/pexels-photo-7659526.jpeg',
      price:2000,
      description: 'producto nuevo de septiembre 2021'
    }

    this.productService.createProduct(newProducto)
    .subscribe(product => {
      console.log(product)
    })
  }


  updateProduct(){
    const newProducto: Partial<product> = {
      title:'Producto editado',
      price:2500,
      description: 'producto nuevo de septiembre 2021'
    }

    this.productService.updateProduct('223', newProducto)
    .subscribe(product => {
      console.log(product)
    })
  }

  deleteProduct(){
    this.productService.deleteProduct('15')
    .subscribe(rta => {
      console.log(rta)
    })

  }
}
