import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

// App goodness
import {appRouting} from './app.routing';
import {AppComponent} from './app.component';
import {AppHeaderComponent} from './app-header/app-header.component';
import {AppFooterComponent} from './app-footer/app-footer.component';
import {ErrorComponent} from './error/error.component';
import {NotFoundComponent} from './not-found/not-found.component';

// Feature Modules
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,
        SharedModule,
        HomeModule,
        appRouting
    ],
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        ErrorComponent,
        NotFoundComponent
    ],
    providers: [
        Title
    ],
    exports: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
