import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IStore } from '../store/';
import { counterActions } from '../actions';

// local state
interface IState {}
// local props
interface IProps {}

interface IMerge extends IProps {
  store: IStore;
  dispatch: Dispatch;
}

class Counter extends React.Component<IMerge, IState> {
  render(): JSX.Element {
    const { store, dispatch } = this.props;
    return (
      <dl>
        <dt>{store.counter.count}</dt>
        <dd>
          <button onClick={() => dispatch(counterActions.increment())}>add</button>
          <button onClick={() => dispatch(counterActions.decrement())}>sub</button>
          <button onClick={() => dispatch(counterActions.reset(0))}>reset</button>
        </dd>
      </dl>
    );
  }
}

const mapStateToProps = (store: IStore) => ({ store });
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });
const mergeProps = (store: any, dispatch: any, ownProps: IProps): IMerge => {
  return Object.assign({}, store, dispatch, ownProps);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Counter);
