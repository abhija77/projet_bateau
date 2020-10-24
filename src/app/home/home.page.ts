import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goCategory(){
    this.router.navigate(['category']);
  }

  goDetails(categorie){
    let params: NavigationExtras = {
      state: {
        categorie: categorie
      }
    };
    this.router.navigate(['menu'], params)
  }
}
