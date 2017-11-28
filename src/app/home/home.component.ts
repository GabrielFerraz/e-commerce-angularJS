import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = PRODUCTS;

  constructor() { }

  ngOnInit() {
  }

}
