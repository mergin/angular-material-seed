import { createSelector, createFeatureSelector } from '@ngrx/store';

export const featureKey = 'feature';

export interface FeatureState {
    counter: number;
}

export const selectFeature = createFeatureSelector<FeatureState>(featureKey);

export const selectFeatureCount = createSelector(
    selectFeature,
    (state: FeatureState) => state.counter
);
