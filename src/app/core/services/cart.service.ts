import { Injectable } from '@angular/core';
/**1re paso inportar modelo de datos */
import { product } from '../../product.model'
/**libreria para manejar programacion reactiva */
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CartService {

  private products: product [] = [] ;
  private cart = new BehaviorSubject<product[]>([])

  cart$  = this.cart.asObservable();
  constructor() { }

  addCart(product: product){
    this.products  = [...this.products, product];
    /**para informarle a todos los componentes suscritos a nuestro servicio
     * se utiliza next(valor) 
     */
    this.cart.next(this.products);
  }
}
