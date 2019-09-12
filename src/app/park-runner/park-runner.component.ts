import { Component, OnInit } from '@angular/core';
import { IMenu } from '../models/menu';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-park-runner',
  templateUrl: './park-runner.component.html',
  styleUrls: ['./park-runner.component.css']
})
export class ParkRunnerComponent implements OnInit {

  role: string;
  menus: IMenu;
  items:  any[];
  constructor(private route: ActivatedRoute, private _menuService: MenuService) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.role = params['role'];
      console.log(this.role);
    });
     this._menuService
      .getMenu(this.role)
      .subscribe( data => {
        this.menus = data;
        this.items = this.menus.data;
        console.log(this.items);
    });
  }
}
