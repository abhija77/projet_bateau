import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor() { }


  ngOnInit() {
  }

  menu = [
    {
      title: "Poissons",
      id: 0
    },
    {
      title: "Coquillages",
      id:1
    },
    {
      title: "Crustaces",
      id:2
    },
    {
      title: "Promotions",
      id:3
    }
  ]

}
