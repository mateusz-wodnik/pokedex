import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createList, itemsIsLoading, getListRequest } from './actions';
import mock from './mock.data.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('creates ADD_POKEMON_LIST when fetching todos has been done', () => {

    fetch.once(JSON.stringify(mock));

    const expectedActions = [
      itemsIsLoading(true),
      itemsIsLoading(false),
      createList(mock),
    ];

    const store = mockStore({});

    return (
      store.dispatch(getListRequest()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });
});
