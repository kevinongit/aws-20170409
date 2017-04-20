import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'

import * as menus from './nav-header-content.json'

export class ShapeOfItem2 {
    name: string;
    href: string;
}

export class ShapeOfSubMenu2 {
    name: string;
    items: ShapeOfItem2[];
}

export class ShapeOfMenu2 {
    name:string;
    items: ShapeOfSubMenu2[];
}

@Component({
    selector: 'app-nav-header',
    templateUrl: './nav-header.component.html'
})
export class NavHeaderComponent {
    menuList:ShapeOfMenu2[];
    constructor() {
        this.menuList = menus;
        console.log("menus[0].name = " + JSON.stringify(this.menuList[0].name));
    }
}