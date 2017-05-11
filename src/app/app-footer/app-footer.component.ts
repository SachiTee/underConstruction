import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: 'app-footer.component.html',
    styleUrls: ['app-footer.component.scss']
})
export class AppFooterComponent {

    public today: Date =  new Date();

    constructor() {

    }
}