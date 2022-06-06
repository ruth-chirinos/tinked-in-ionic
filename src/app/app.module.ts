import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule, HammerModule} from '@angular/platform-browser';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {RouteReuseStrategy} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ApiService} from '../services/api/api.service';
import {ClientService} from '../services/client/client.service';
import {LinkedInService} from '../services/linked-in/linked-in.service';
import {RecommendationService} from '../services/recommendation/recommendation.service';
import {MockClientService} from '../services/client/mock-client.service';
import {AnalyticsService} from '../services/analytics/analytics.service';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        IonicModule.forRoot(),
        TranslateModule.forRoot(
            {
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [HttpClient]
                },
                defaultLanguage: 'es'
            }
        ),
        HammerModule,
        AppRoutingModule,
        FontAwesomeModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        ApiService,
        ClientService,
        LinkedInService,
        RecommendationService,
        AnalyticsService,

        //Mock
        MockClientService,
        {
            provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
        },
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {
}
