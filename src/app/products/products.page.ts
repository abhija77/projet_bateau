import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(public http: HttpClient, private route: ActivatedRoute, private router: Router, private cartService: CartService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state)
        this.categoryNumber = this.router.getCurrentNavigation().extras.state.id;
    })
  }

  products = [];
  categoryNumber: number;
  cartProducts: CartProduct[];
  doActionAdd = true;

  ngOnInit() {
    this.getProductList();
    this.cartService.cartProducts.subscribe(value => {
      this.cartProducts = value;
    })
  }

  isInCart(id: number){
    return this.cartProducts.some(value => value.product.id == id);
  }

  addToCart(element: CartProduct){
    this.cartService.addProduct(element);
  }

  goToCart(){
    this.router.navigate(['/cart'])
  }

  removeFromCart(element: CartProduct){
    this.cartService.removeProduct(element);
  }

  toggleActionCart(element: Product){
    const product = this.cartProducts.filter(value => value.product.id == element.id);
    if(product.length == 0){
      this.addToCart({quantity:1,product: element})
    } else {
      this.removeFromCart(product[0]);
    }
  }

  getProductList() {
    this.http
      .get<any[]>('../../../assets/data.json')
      .subscribe(
        (res) => {

          if (this.categoryNumber == 3)
            this.products = res.filter(val => val.sale)
          else
            this.products = res.filter(val => val.category === this.categoryNumber);
        },
        (err) => console.log("erreur " + err)
      )
  }


}
