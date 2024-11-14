import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL= 'https://utn-lubnan-api-2.herokuapp.com/api/product';

  constructor(private http:HttpClient) { }

  addProduct(product: any){
    return this.http.post(this.apiURL, product).toPromise();
  }

}
