import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {NotFoundComponent} from './not-found.component';

describe('Component: not-found', () => {
    let component: NotFoundComponent;
    let fixture: ComponentFixture<NotFoundComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NotFoundComponent
            ],
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotFoundComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.query(By.css('.component-not-found'));

        fixture.detectChanges();
    });

    it('should exist', () => {
        expect(typeof(component)).not.toBe(('undefined'));
    });
});
