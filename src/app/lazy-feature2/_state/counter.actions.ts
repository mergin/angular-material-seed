import { createAction } from '@ngrx/store';

export const actions = {
    increment: createAction('[Counter Feature] Increment'),
    decrement: createAction('[Counter Feature] Decrement'),
    reset: createAction('[Counter Feature] Reset')
};
