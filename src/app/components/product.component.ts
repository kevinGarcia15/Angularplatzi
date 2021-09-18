import { Component, Input, Output, EventEmitter } from '@angular/core'
import { product } from '../product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})

export class ProductComponent{
    @Input() producto: product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
 
    addCart(){
        console.log("agregado al carrito")
        this.productClicked.emit(this.producto)       
    }
}