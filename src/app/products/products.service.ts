import { Injectable } from '@angular/core';
import productData from '../products.json';
import { of } from 'rxjs';

interface Product{
  id: Number;
  name: String;
  price: Number;
  speed: String;
  engine: String;
  fuel: String;
}
@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() { }
  productData: Product[]= productData;
  getAllProducts(){
    return of(this.productData);
  }
  getProduct(id: number){
    return of(this.productData.find(p => p.id === id));
  }
}
