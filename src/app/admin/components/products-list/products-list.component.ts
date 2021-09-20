import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/porducts/products.service';
import { product } from 'src/app/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: product[] = []
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllPorducts()
    .subscribe(products => {
      this.products = products;
    })
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta =>this.fetchProducts())
  }
}
