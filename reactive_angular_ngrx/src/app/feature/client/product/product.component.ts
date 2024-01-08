import {  Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/core/models/Product';
import {  LoadProducts } from 'src/app/state/product/action';
import { getProductsSelector } from 'src/app/state/product/selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit{
  constructor(
    private store: Store<any>,
  ) { }
  products = this.store.select(getProductsSelector)
  ngOnInit() {
    this.store.dispatch(new LoadProducts());
  }
}
