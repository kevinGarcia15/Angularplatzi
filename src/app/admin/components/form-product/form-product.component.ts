import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../../core/services/porducts/products.service'

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.createProduct(product)
      .subscribe((newProducto)=>{
        console.log(newProducto)
        this.router.navigate(['admin/products']) 
      })      
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id:['', [Validators.required]],
      title:['', [Validators.required]],
      price:['', [Validators.required]],
      //image:['', [Validators.required]],
      description:['', [Validators.required]],

    })
  }

}
