import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from './../menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() items!: MenuItem[];
  @ViewChild('menu', { static: true }) menu: any;

  constructor() {}

  ngOnInit() {}

  hasChildren(item: MenuItem) {
    return item.children && item.children.length > 0;
  }
}
