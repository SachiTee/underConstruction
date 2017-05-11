/**
 * Created by MissTy on 4/16/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public myDate: Date = new Date (2017, 9, 3);
    public timeRemaining: number;
    public remainingMonth: number;
    public remainingYear: number;

    constructor() {
        this.timeRemaining = this.myDate.valueOf() - new Date().valueOf();
        console.log(this.timeRemaining);
        this.remainingMonth = this.myDate.getMonth();
        this.remainingYear = this.timeRemaining - this.myDate.getFullYear();
    }
    updateTime(): void {
        this.timeRemaining = this.timeRemaining - 1000;
    }

}

