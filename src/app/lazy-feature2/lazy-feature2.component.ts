import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import { actions } from './_state/counter.actions';
import { selectFeatureCounter } from './_state';
// import { FeatureState } from './_state';

@Component({
    selector: 'app-lazy-feature2',
    templateUrl: './lazy-feature2.component.html',
    styleUrl: './lazy-feature2.component.scss'
})
export class LazyFeature2Component {

    title = 'Lazy Feature 2';
    description = 'State management example';
    count$: Observable<number>;

    constructor(
        private router: Router,
        private store: Store
    ) {
        this.count$ = store.select(selectFeatureCounter);
    }

    increment(): void {
        this.store.dispatch(actions.increment());
    }

    decrement(): void {
        this.store.dispatch(actions.decrement());
    }

    reset(): void {
        this.store.dispatch(actions.reset());
    }

    onButtonClick(): void {
        this.router.navigate(['/']);
    }
}
