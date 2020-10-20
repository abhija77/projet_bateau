import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  const titres = [
    {
      content:"Produits et promotions",
      navigationUrl:[],
      icon:"fish-outline"
    },
    {
      content:"Bateaux",
      navigationUrl:['/bateaux'],
      icon:"boat-outline"
    },
    {
      content:"Restaurants",
      navigationUrl:[],
      icon:""
    },
    {
      content:"Recettes",
      navigationUrl:[],
      icon:""
    },
    {
      content:"Contact",
      navigationUrl:[],
      icon:""
    }
  ]
  constructor() {}

}
