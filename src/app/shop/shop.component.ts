import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import productData from '../products.json';

interface Product{
  id: Number;
  name: String;
  price: Number;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  constructor(){}
  product: Product[]= productData;
  ngOnInit(): void {
    
  }
 
}
