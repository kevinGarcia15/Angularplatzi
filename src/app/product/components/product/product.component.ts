import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    SimpleChanges, 
    OnChanges, 
    OnInit 
} from '@angular/core'

import { product } from '../../../product.model'
import {CartService} from './../../../core/services/cart.service'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnChanges, OnInit{
    today = new Date();
    @Input() producto: product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    constructor(
        private cartService: CartService
        ){}

    addCart(){
        this.cartService.addCart(this.producto)       
    }

    ngOnChanges(changes: SimpleChanges){
        console.log(changes)
    }

    ngOnInit(){
        console.log("3. ngOnInit")
    }
}