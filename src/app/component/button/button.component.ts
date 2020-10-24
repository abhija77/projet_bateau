import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() name:string;
  @Input() width=null;
  @Input() nameIcon:string=null;
  constructor() { }

  ngOnInit() {}

}
