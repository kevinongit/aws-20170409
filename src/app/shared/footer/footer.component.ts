import { Component } from '@angular/core'

import * as menus from './footer-content.json'

export class ShapeOfItem {
    name: string;
    hre: string;
}

export class ShapeOfMenu {
    name:string;
    items: ShapeOfItem[];
}

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    menuList:ShapeOfMenu[];
    constructor() {
        this.menuList = menus;
        console.log("menus[0].name = " + JSON.stringify(this.menuList[0].name));
    }
}