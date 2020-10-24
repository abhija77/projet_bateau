import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartProduct } from '../models/cart-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: BehaviorSubject<CartProduct[]> = new BehaviorSubject([]);
  constructor() { }

  addProduct(product : CartProduct){
    const arr = this.cartProducts.value;
    arr.push(product);
    this.cartProducts.next(arr);
  }

  removeProduct(element : CartProduct){
    const arr = this.cartProducts.value;
    const result = arr.filter(value => value.product.id != element.product.id);
    this.cartProducts.next(result);
  }

  incrementQuantity(id: number){
    const arr = this.cartProducts.value;
    arr.forEach(value => {
      if(value.product.id == id){
        value.quantity += 1;
      }
    });
    this.cartProducts.next(arr);
  }

  decrementQuantity(id: number){
    const arr = this.cartProducts.value;
    arr.forEach(value => {
      if(value.product.id == id){
        value.quantity -= 1;
      }
    });
    this.cartProducts.next(arr);
  }

  resetCart(){
    this.cartProducts.next([]);
  }
}
