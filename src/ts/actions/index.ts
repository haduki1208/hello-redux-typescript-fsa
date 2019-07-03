import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const counterActions = {
  increment: actionCreator<void>('INCREMENT'),
  decrement: actionCreator<void>('DECREMENT'),
  reset: actionCreator<number>('RESET')
};
