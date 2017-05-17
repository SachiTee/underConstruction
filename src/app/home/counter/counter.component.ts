/**
 * Created by MissTy on 4/16/2017.
 */
import {Component, Input, OnChanges, OnInit, OnDestroy, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnChanges, OnInit, OnDestroy {
    public static oneDay = 24*60*60*1000;
    public stringArray = ['apple', 'orange', 'kiwi'];
    @Input() targetDate: Date;
    @Input() remaining: number;
    @Output() tick: EventEmitter<null> = new EventEmitter(null);
    public displaySeconds: number;
    public yearsLeft: number;
    public monthsLeft: number;
    public daysLeft: number;
    private counter: number;
    constructor() {}
    ngOnInit(): void {
        this.counter = window.setInterval(() => {
            this.tick.emit();
        }, 10000);
    }
    ngOnChanges(): void {
        let today = new Date();
        let nextMonth = new Date();
        nextMonth.setMonth(today.getMonth() + 1);
        nextMonth.setDate(1);
        let daysThisMonth = Math.round(Math.abs((today.getTime() - nextMonth.getTime())/(CounterComponent.oneDay))) - 1;
        this.displaySeconds = Math.round(this.remaining / 1000);
        this.monthsLeft = this.targetDate.getMonth() - today.getMonth();
        this.daysLeft = daysThisMonth + this.targetDate.getDate();
    }
    ngOnDestroy(): void {
        window.clearInterval(this.counter);
    }
}
