import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(public http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state)
        this.categoryNumber = this.router.getCurrentNavigation().extras.state.id;
    })
  }

  products = [];
  categoryNumber: number;

  ngOnInit() {
    this.getProductList();
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
