import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomePage} from './ui/home.page';
import {HammerModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {ComponentsModule} from '../../components/components.module';
import {HomeUseCases} from './use-cases/home.use-cases';
import {HomeRepository} from './repository/home.repository';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
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
        TranslateService,
        HomeUseCases,
        HomeRepository
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
