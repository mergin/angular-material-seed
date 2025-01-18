import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { LazyFeature2Component } from './lazy-feature2.component';
import { counterFeature } from './_state';

describe('LazyFeature2Component', () => {
    let component: LazyFeature2Component;
    let fixture: ComponentFixture<LazyFeature2Component>;
    let store: Store;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({ feature: combineReducers(counterFeature.reducer) })
            ],
        })
            .compileComponents();

        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();

        fixture = TestBed.createComponent(LazyFeature2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(LazyFeature2Component);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Lazy Feature 2');
    });
});
