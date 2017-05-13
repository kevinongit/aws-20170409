import { Component } from '@angular/core'

// import { SliderComponent } from './slider.component'

import { CarouselConfig } from 'ngx-bootstrap/carousel'

@Component({
    selector: 'home-banner',
    templateUrl: './banner.component.html',
    styles : [`
    .glyphicon {
        color: blue !important;
    }
    .carousel {
     background: white !important;
     color: bule !important;
    }
    .carousel-control.right, .carousel-control.left {
  background-image:none !important;
  visibility:hidden !important;
}
    `],
    providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true} }]
})
export class BannerComponent {
    public slides = [
        { title : "Smart But Casual", content : "Start Something..."},
        { title : "Second Phrase", content : "Start Something..."},
        { title : "Third Porviders", content : "Start Something..."}
    ];
}