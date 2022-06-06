import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GuidePage} from './guide.page';
import {HammerModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {ComponentsModule} from '../../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: GuidePage,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        TranslateModule.forChild(),
        IonicModule,
        CommonModule,
        FormsModule,
        HammerModule,
        ComponentsModule
    ],
    providers: [
        TranslateService
    ],
    declarations: [GuidePage]
})
export class GuidePageModule {
}
