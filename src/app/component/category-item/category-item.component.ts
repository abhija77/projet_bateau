import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  constructor(private router: Router) { }

  goProducts(){
    let params: NavigationExtras = {
      state: {
        id: this.id
      }
    };
    this.router.navigate(['products'], params);
  }

  ngOnInit() {}

}
