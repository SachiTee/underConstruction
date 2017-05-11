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
    @Input() targetDate: Date;
    @Input() remaining: number;
    @Output() tick: EventEmitter<null> = new EventEmitter(null);
    public displaySeconds: number;
    private counter: number;
    constructor() {}
    ngOnInit(): void {
        this.counter = window.setInterval(() => {
            this.tick.emit();
        }, 1000);
    }
    ngOnChanges(): void {
        this.displaySeconds = Math.round(this.remaining / 1000);

    }
    ngOnDestroy(): void {
        window.clearInterval(this.counter);
    }
}
