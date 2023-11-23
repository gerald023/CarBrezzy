import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productslist.component.html',
  styleUrls: [
    './productslist.component.css',
    './resShop.css',
    './resShop2.css'
  ]
})
export class ProductslistComponent implements OnInit{
  products: any[] = [];
  constructor(private store: ProductsService){}
  ngOnInit(): void {
    this.store.getAllProducts().subscribe(products =>{
      this.products = products;
    });
  
   
  }

}
