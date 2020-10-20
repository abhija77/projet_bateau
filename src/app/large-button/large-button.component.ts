import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-large-button',
  templateUrl: './large-button.component.html',
  styleUrls: ['./large-button.component.scss'],
})
export class LargeButtonComponent implements OnInit {
  @Input() content;
  @Input() icon;
  @Input() url;
  constructor() { }

  ngOnInit() {}


}
