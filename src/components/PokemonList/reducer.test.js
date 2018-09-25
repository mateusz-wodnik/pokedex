import reducer, { items, hasFailed, isLoading, initialState, modal } from './reducer';
import { createList, itemsIsLoading, itemsHasErrored, toggleModal } from './actions';
import mock from './mock.data.json';

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
    expect(items([], createList(mock))).toEqual(mock);
  });

  it('should show modal', () => {
    expect(modal([], toggleModal(true))).toEqual(true);
  });

  it('should hide modal', () => {
    expect(modal([], toggleModal(false))).toEqual(false);
  });
});
