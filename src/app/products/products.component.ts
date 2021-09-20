import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/porducts/products.service';
import { product } from '../product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: product[];
  constructor(private productService: ProductsService
    ) { }

  ngOnInit(): void {
    this.products = this.productService.getAllPorducts()
  }
  clickProduct(product: any){
    console.log(product.id)
  }
}
