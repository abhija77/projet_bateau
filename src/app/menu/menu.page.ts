import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import bateau from '../constants/bateau'
import recettes from '../constants/recettes'
import restaurant from '../constants/restaurant'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  categorie: any

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        if (this.router.getCurrentNavigation().extras.state.categorie == "bateau")
          this.categorie = bateau
        else
          if (this.router.getCurrentNavigation().extras.state.categorie == "recette")
            this.categorie = recettes
          else
            this.categorie = restaurant
      }
    })
  }

  ngOnInit() {
  }

  goDetails(index) {
    let params: NavigationExtras = {
      state: {
        id: index,
        categorie: this.categorie
      }
    };
    this.router.navigate(['details'], params);
  }

}
