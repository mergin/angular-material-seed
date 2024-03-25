import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { counterReducer } from './_state/counter.reducer';

describe('AppComponent', () => {

    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let store: Store<{ count: number }>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                SharedModule,
                StoreModule.forRoot({ count: counterReducer })
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();

        store = TestBed.get(Store);

        spyOn(store, 'dispatch').and.callThrough();

        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        // const fixture = TestBed.createComponent(AppComponent);
        // const app = fixture.componentInstance;
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
        expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-material-seed');
    });
});
