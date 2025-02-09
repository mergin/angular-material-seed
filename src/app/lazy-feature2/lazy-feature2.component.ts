import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';

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
    styleUrl: './lazy-feature2.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyFeature2Component {

    count: Signal<number>;

    private readonly router = inject(Router);
    private readonly store = inject(Store);

    constructor() {
        this.count = toSignal(this.store.select(selectFeatureCounter), { initialValue: 0 });
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
