import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../../../product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(
    private http: HttpClient
  ) { }

  getAllPorducts(){
    return this.http.get('https://platzi-store.herokuapp.com/products')
  }

  getProduct(id: string){
    return this.http.get(`https://platzi-store.herokuapp.com/products/${id}`)
  }
}
