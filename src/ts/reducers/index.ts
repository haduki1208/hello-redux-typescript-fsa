import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { counterActions } from '../actions/';

export interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0
};

export const counterReducer = reducerWithInitialState(initialState)
  .case(counterActions.increment, (state: ICounterState) => {
    return Object.assign({}, state, { count: state.count + 1 });
  })
  .case(counterActions.decrement, (state: ICounterState) => {
    return Object.assign({}, state, { count: state.count - 1 });
  })
  .case(counterActions.reset, (state: ICounterState, payload: number) => {
    return Object.assign({}, state, { count: payload });
  });
