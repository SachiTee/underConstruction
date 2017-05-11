/**
 * Created by MissTy on 4/16/2017.
 */
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {homeRouting} from './home.routing';
import {HomeComponent} from './home.component';
import {CounterComponent} from './counter/counter.component';

@NgModule({
    imports: [
        SharedModule,
        homeRouting
    ],
    declarations: [
        HomeComponent,
        CounterComponent
    ],
    providers: []
})
export class HomeModule { }
