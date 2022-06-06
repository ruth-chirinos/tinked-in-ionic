import {NgModule} from '@angular/core';
import {TinderUiComponent} from './tinder-ui/tinder-ui.component';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {IonicModule} from '@ionic/angular';
import {HammerModule} from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        HammerModule,
    ],
    providers: [],
    exports: [
        TinderUiComponent,
        HeaderComponent
    ],
    declarations: [TinderUiComponent, HeaderComponent]
})
export class ComponentsModule {
}
