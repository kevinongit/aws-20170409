import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private homeService:HomeService) {
        
    }
}