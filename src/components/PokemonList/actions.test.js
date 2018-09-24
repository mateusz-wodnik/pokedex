import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions';
import fetchMock from 'fetch-mock';​
import mock from './mock.data.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates ADD_POKEMON_LIST when fetching todos has been done', () => {
    fetchMock.getOnce('/pokemon', { body: mock, headers: { 'content-type': 'application/json' } })​​

    const expectedActions = [
      { type: actions.GET_LIST_LOADING, isLoading: true },
      { type: actions.GET_LIST_LOADING, isLoading: false },
      { type: actions.ADD_POKEMON_LIST, body: mock  },
    ];

    const store = mockStore(mock);

    return store.dispatch(actions.fetchTodos()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});
