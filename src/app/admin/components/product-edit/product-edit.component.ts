import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from '../../../core/services/porducts/products.service'
import { MyValidators } from '../../../utils/validators'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id : string;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params)=>{
      this.id = params.id;
      this.productService.getProduct(this.id)
      .subscribe(product => {
        /**inyectar el producto que recibio de la api a nuestro formulario */
        this.form.patchValue(product)
      })
    })
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product)
      .subscribe((newProducto)=>{
        console.log(newProducto)
        this.router.navigate(['admin/products']) 
      })      
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title:['', [Validators.required]],
      price:['', [Validators.required, MyValidators.isPriceValid]],
      image:[''],
      description:['', [Validators.required]],

    })
  }
}
