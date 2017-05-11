import {NgModule, Optional, SkipSelf} from '@angular/core';
import {DataService} from './services/DataService';

// Almost all services should be here
@NgModule({
    providers: [
        DataService
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only.');
        }
    }
}