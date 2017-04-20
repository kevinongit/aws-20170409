import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component'
import { NavHeaderComponent } from './nav-header/nav-header.component'
import { FooterComponent } from './footer/footer.component'

/**
* Do not specify providers for modules that might be imported by a lazy loaded module.
*/

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [ HeaderComponent, NavHeaderComponent, FooterComponent ],
    exports: [CommonModule, FormsModule, RouterModule, HeaderComponent, NavHeaderComponent, FooterComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
