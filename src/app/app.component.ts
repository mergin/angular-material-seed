import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

import { increment, decrement, reset } from './_state/counter.actions';
import { FeatureState } from './_state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    title = 'angular-material-seed';
    count$: Observable<number>;

    constructor(private store: Store<{ count: number }>) {
        this.count$ = store.select('count');
    }

    increment(): void {
        this.store.dispatch(increment());
    }

    decrement(): void {
        this.store.dispatch(decrement());
    }

    reset(): void {
        this.store.dispatch(reset());
    }
}
