import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { AppRoutingModule } from './app-routing.module';
// import { appRoutes } from 'app/app-routing.module';

// const routerConfig: ExtraOptions = {
//     preloadingStrategy       : PreloadAllModules,
//     scrollPositionRestoration: 'enabled'
// };

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),

        // 24/4/2022: Fuse, not use
        // RouterModule.forRoot(appRoutes, routerConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({})
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}


// 24/4/2022 : Fuse, not use -> move to appRoutingModule
// function appRoutes(appRoutes: any, routerConfig: ExtraOptions): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
//     throw new Error('Function not implemented.');
// }

