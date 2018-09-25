import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ADD_POKEMON_LIST, LOADING_POKEMON_LIST, getListRequest } from './actions';
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
      { type: LOADING_POKEMON_LIST, isLoading: true },
      { type: LOADING_POKEMON_LIST, isLoading: false },
      { type: ADD_POKEMON_LIST, pokemons: mock },
    ];

    const store = mockStore({});

    return (
      store.dispatch(getListRequest()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });
});
