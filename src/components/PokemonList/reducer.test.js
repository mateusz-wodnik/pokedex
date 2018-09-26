import reducer, { items, hasFailed, isLoading, initialState, modal } from './reducer';
import { createList, itemsIsLoading, itemsHasErrored, showModal, hideModal } from './actions';
import mock from './mock.data.json';
import arrToDict from '../../_utils/arrayToDictionary';

describe('Pokemon list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOADING_POKEMON_LIST', () => {
    expect(isLoading([], itemsIsLoading(true))).toEqual(true);
  });

  it('should handle FAILED_POKEMON_LIST', () => {
    expect(hasFailed([], itemsHasErrored(true))).toEqual(true);
  });

  it('should handle ADD_POKEMON_LIST', () => {
    expect(items([], createList(arrToDict(mock)))).toEqual(arrToDict(mock));
  });

  it('should show modal', () => {
    expect(modal([], showModal(1))).toEqual(1);
  });

  it('should hide modal', () => {
    expect(modal([], hideModal())).toEqual(null);
  });
});
