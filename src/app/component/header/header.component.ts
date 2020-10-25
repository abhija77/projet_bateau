import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartProducts:CartProduct[];
  constructor(
  private cartService:CartService,
  ) { }

  ngOnInit() {
    this.cartService.cartProducts.subscribe(value=>{this.cartProducts=value})
  }




}
