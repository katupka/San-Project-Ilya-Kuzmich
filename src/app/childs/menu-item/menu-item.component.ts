import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  title = ''
  icon = ''

  @Input() set setTitle(s: string) {
    this.title = s;
  }

  @Input() set setIcon(s: string) {
    this.icon = s;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
