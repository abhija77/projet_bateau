import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartProducts:CartProduct[];
  constructor(
  private cartService:CartService,
  private router: Router
  ) { }

  ngOnInit() {
    this.cartService.cartProducts.subscribe(value=>{this.cartProducts=value})
  }

  goToCart(){
    this.router.navigate(['/cart'])
  }



}
