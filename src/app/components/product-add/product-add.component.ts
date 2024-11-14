import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../types';
import { CustomValidators } from '../../customValidator/CustomValidator';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {

  productForm!: FormGroup;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required,CustomValidators.numbersOnly()),
      price: new FormControl('',Validators.required)
    });
  }

  addProduct(){
    let product = new Product();
    product.description = this.productForm.value.description;
    product.name = this.productForm.value.name;
    product.price = this.productForm.value.price;
    product.productCategoryId = 1;
    
    console.log(product);



    this.productService.addProduct(product)
    .then(response => {

      alert("Product added Succesfully");

      this.productForm.reset();
      this.productForm.markAsPristine();
      this.productForm.markAsUntouched();
    }
    )
    .catch(error =>{
      alert("Error creating product. Try Again.");
    } );
  }

}