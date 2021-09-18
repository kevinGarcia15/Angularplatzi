import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    SimpleChanges, 
    OnChanges, 
    OnInit 
} from '@angular/core'

import { product } from '../product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})

export class ProductComponent implements OnChanges, OnInit{
    @Input() producto: product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    constructor(){
        console.log('1. constructor')
    }
    addCart(){
        console.log("agregado al carrito")
        this.productClicked.emit(this.producto)       
    }

    ngOnChanges(changes: SimpleChanges){
        console.log(changes)
    }

    ngOnInit(){
        console.log("3. ngOnInit")
    }
}