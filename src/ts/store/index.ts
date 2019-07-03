import { createStore, combineReducers } from 'redux';
import { counterReducer, ICounterState } from '../reducers/';

export type IStore = {
  counter: ICounterState;
};

const store = createStore(
  combineReducers<IStore>({
    counter: counterReducer
  })
);

export default store;
