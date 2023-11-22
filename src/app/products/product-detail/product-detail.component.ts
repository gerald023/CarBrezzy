import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: [
    './product-detail.component.css',
    './prolist.css',
    './list.css'
  ]
})
export class ProductDetailComponent implements OnInit{
  product: any = {};
  constructor(private store: ProductsService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = params.get('id');

      if(id){
        this.store.getProduct(parseInt(id, 10)).subscribe(product => this.product = product)
      }

    })
  }
}
