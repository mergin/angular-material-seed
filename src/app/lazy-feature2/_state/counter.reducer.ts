/* eslint-disable @ngrx/on-function-explicit-return-type */
import { createReducer, on } from '@ngrx/store';
import { actions } from './counter.actions';
import { CounterState } from '.';

export const initialState: CounterState = { counter: 0 };

export const counterReducer = createReducer(
    initialState,
    on(
        actions.increment,
        (state) => ({ ...state, counter: state.counter + 1 })
    ),
    on(
        actions.decrement,
        (state) => ({ ...state, counter: state.counter - 1 })
    ),
    on(
        actions.reset,
        (state) => ({ ...state, counter: 0 })
    )
);
