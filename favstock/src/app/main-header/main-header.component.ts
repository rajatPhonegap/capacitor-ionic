import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {

  @Input() headerName: any;
  @Input() iconName: any;
  constructor() { }
  ngOnInit() {}

}
