import { Component, Input, OnInit } from '@angular/core';
import bateau from '../constants/bateau'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  // @Input() info: object
  constructor() { }

  ngOnInit() {
  }

  info = bateau[0]

  // info = 
  //   {
  //     title: string,
  //     subtitle: string,
  //     image: string,
  //     description: array of string
  //   }

}
