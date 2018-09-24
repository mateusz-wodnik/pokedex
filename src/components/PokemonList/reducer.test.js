import reducer from './reducer';
import * as actions from './actions';
import mock from './mock.data.json';

describe('Pokemon list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle GET_LIST_LOADING', () => {
    const action = {
      type: actions.GET_LIST_LOADING,
      isLoading: true,
    };
    expect(reducer([], action)).toEqual(true);
  });

  it('should handle GET_LIST_FAILED', () => {
    const action = {
      type: actions.GET_LIST_FAILED,
      isLoading: true,
    };
    expect(reducer([], action)).toEqual(true);
  });

  it('should handle ADD_POKEMON_LIST', () => {
    const action = {
      type: actions.ADD_POKEMON_LIST,
      list: mock.list,
    };
    expect(reducer([], action)).toEqual(mock.list);
  });
});
