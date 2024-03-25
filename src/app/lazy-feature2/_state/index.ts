import { createSelector, createFeatureSelector, createFeature } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

export const featureKey = 'counter';

export interface CounterState {
    counter: number;
}

export const selectFeature = createFeatureSelector<CounterState>(featureKey);

export const selectFeatureCounter = createSelector(
    selectFeature,
    (state: CounterState) => state.counter
);

export const counterFeature = createFeature({
    name: featureKey,
    reducer: counterReducer
});
