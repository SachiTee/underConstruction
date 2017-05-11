import {Component, OnInit} from '@angular/core';
import '../rxjs-ops';
import './shared/sass/common.global.scss';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() {

    }

    ngOnInit(): void {
        console.log('loading');
    }
}
