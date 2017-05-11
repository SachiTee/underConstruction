import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {By} from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ErrorComponent} from './error/error.component';
import {AppHeaderComponent} from './app-header/app-header.component';
import {AppFooterComponent} from './app-footer/app-footer.component';
import {appRouting} from './app.routing';

describe('Component: app', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                appRouting
            ],
            declarations: [
                AppComponent,
                AppHeaderComponent,
                AppFooterComponent,
                NotFoundComponent,
                ErrorComponent
            ],
            providers: [
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.query(By.css('.component-app'));

        fixture.detectChanges();
    });

    it('should exist', () => {
        expect(typeof(component)).not.toBe(('undefined'));
    });
});
