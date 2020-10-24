import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  // @Input() info: object

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.page = this.router.getCurrentNavigation().extras.state.categorie[this.router.getCurrentNavigation().extras.state.id];
      }
    })
  }
  page: any

  ngOnInit() {
  }


  // info = 
  //   {
  //     title: string,
  //     subtitle: string,
  //     image: string,
  //     description: array of stringinfo
  //   }

}
