import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { CartProduct } from '../models/cart-product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  cartList: CartProduct[] = [];
  

  constructor(private cartService: CartService, private platform : Platform, private router: Router) { }

  ngOnInit() {
    this.cartService.cartProducts.subscribe(value => {
      this.cartList = value;
    });
  }

  goToHome(){
    this.router.navigate(["/home"]);
  }

  getProductTotal(element: CartProduct){
    return element.quantity * element.product.price;
  }

  deleteProduct(product: CartProduct){
    this.cartService.removeProduct(product);
  }

  getTotal(){
    let total = 0;
    this.cartList.forEach(value => {
      total += this.getProductTotal(value);
    });
    return total;
  }

  incrementQuantity(id:number){
    this.cartService.incrementQuantity(id);
  }

  getHeight(){
    return this.platform.height() - 50;
    
  }


  decrementQuantity(id:number){
    this.cartService.decrementQuantity(id);

  }

  log(el){
    console.log(el);
  }

}
