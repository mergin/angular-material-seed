import { createAction } from '@ngrx/store';

export const ACTIONS = ['increment', 'decrement', 'reset'] as const;
export type Action = typeof ACTIONS[number];

export const actions = {
    increment: createAction('[Counter Feature] Increment'),
    decrement: createAction('[Counter Feature] Decrement'),
    reset: createAction('[Counter Feature] Reset')
};
