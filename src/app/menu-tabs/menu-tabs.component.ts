import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'menu-tabs',
  templateUrl: './menu-tabs.component.html',
  styleUrls: ['./menu-tabs.component.css']
})
export class MenuTabsComponent implements OnInit {
  links = ['First', 'Second', 'Third'];
  background = '';
 
  constructor() { }

  ngOnInit() {
  }

}
