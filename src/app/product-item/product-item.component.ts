import { Component, OnInit, Input } from '@angular/core';
import { StarsComponent } from '../stars/stars.component';
import { Product } from '../product.service';

@Component({
  selector: 'auction-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  
  constructor() { }

  ngOnInit() {
  }

}
