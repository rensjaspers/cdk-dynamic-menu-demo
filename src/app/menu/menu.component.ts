import { MenuItem } from './../menu-item.interface';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {
  @Input() items!: MenuItem[];
  @ViewChild('menu') menu: any;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.cd.markForCheck();
  }

  hasChildren(item: MenuItem) {
    return item.children && item.children.length > 0;
  }
}
