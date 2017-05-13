import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CarouselModule } from 'ngx-bootstrap'

import { HomeComponent } from './home.component'
import { routing } from './home.routes'

import { BannerComponent } from './banner'
// import { SliderComponent } from './banner'



@NgModule({
    imports: [
        CommonModule,
        CarouselModule.forRoot(),
        routing
    ],
    declarations: [
        BannerComponent,
        // SliderComponent,
        HomeComponent
    ],
    providers : [

    ]
})
export class HomeModule {}