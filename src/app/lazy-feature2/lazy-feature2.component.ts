import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import { actions } from './_state/counter.actions';
import { selectFeatureCounter } from './_state';
// import { FeatureState } from './_state';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatDividerModule,
    ],
    selector: 'app-lazy-feature2',
    templateUrl: './lazy-feature2.component.html',
    styleUrl: './lazy-feature2.component.scss'
})
export class LazyFeature2Component {

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
