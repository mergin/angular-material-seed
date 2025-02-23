import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { routes } from './app.routes';

describe('AppComponent', () => {

    // let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        // await TestBed.configureTestingModule({
        //     imports: [
        //         RouterTestingModule,
        //         StoreModule.forRoot({})
        //     ],
        // }).compileComponents();
        TestBed.configureTestingModule(
            Object.assign({}, appConfig, {
                imports: [StoreModule.forRoot({})],
                providers: [
                    provideRouter(routes),
                ],
            }),
        );

        fixture = TestBed.createComponent(AppComponent);
        fixture.autoDetectChanges();
        // app = fixture.componentInstance;
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should have as title `angular-material-seed`', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('angular-material-seed');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('angular-material-seed');
    });
});
