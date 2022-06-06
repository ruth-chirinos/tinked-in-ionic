import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'guide',
        loadChildren: () => import('../pages/guide/guide.module').then(m => m.GuidePageModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
    },
    {
        path: 'chat',
        loadChildren: () => import('../pages/chat/chat.module').then(m => m.ChatPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,
            {preloadingStrategy: PreloadAllModules}),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
