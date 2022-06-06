import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ChatPage} from './chat.page';
import {HammerModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {ComponentsModule} from '../../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: ChatPage,
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
    declarations: [ChatPage]
})
export class ChatPageModule {
}
