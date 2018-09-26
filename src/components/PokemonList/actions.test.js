import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {createList, itemsIsLoading, getListRequest, itemsHasErrored, addPage, changePage} from './actions';
import mock from './mock.data.json';
import arrToDict from '../../_utils/arrayToDictionary';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('creates ADD_POKEMON_LIST when fetching todos has been done', () => {

    fetch.once(JSON.stringify(mock));

    const expectedActions = [
      itemsHasErrored(null),
      itemsIsLoading(true),
      itemsIsLoading(false),
      createList(arrToDict(mock)),
      addPage(1, mock.map(pokemon => pokemon.id)),
      changePage(1),
    ];

    const store = mockStore({});

    return (
      store.dispatch(getListRequest(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });
});
