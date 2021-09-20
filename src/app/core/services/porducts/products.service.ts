import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../../../product.model'
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(
    private http: HttpClient
  ) { }

  getAllPorducts(){
    return this.http.get<product[]>(environment.url_api + 'products')
  }

  getProduct(id: string){
    return this.http.get<product>(`${environment.url_api}products/${id}`)
  }

  createProduct(product: product){
    return this.http.post(`${environment.url_api}products/`, product);
  }
}
