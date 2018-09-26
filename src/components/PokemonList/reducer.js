import { combineReducers } from 'redux';

import {
  ADD_POKEMON_LIST,
  LOADING_POKEMON_LIST,
  FAILED_POKEMON_LIST,
  SHOW_MODAL,
  HIDE_MODAL,
  ADD_PAGE,
  CHANGE_PAGE,
} from './actions';


export const initialState = {
  items: {},
  hasFailed: null,
  isLoading: false,
  modal: false,
  pages: {},
  page: 1,
};

// Handle all pokemon items in a dictionary
export function items(state = initialState.items, action) {
  switch (action.type) {
    case ADD_POKEMON_LIST:
      return { ...state, ...action.items };

    default:
      return state;
  }
}
// Handle fetch error
export function hasFailed(state = initialState.hasFailed, action) {
  switch (action.type) {
    case FAILED_POKEMON_LIST:
      return action.hasFailed;

    default:
      return state;
  }
}
// Handle fetch loading state
export function isLoading(state = initialState.isLoading, action) {
  switch (action.type) {
    case LOADING_POKEMON_LIST:
      return action.isLoading;

    default:
      return state;
  }
}
// Handle fetched pages and store each page items ids in dictionary
export function pages(state = initialState.pages, action) {
  switch (action.type) {
    case ADD_PAGE:
      return { ...state, [action.page]: action.ids };

    default:
      return state;
  }
}
// Keep actual page number displayed in UI
export function page(state = initialState.page, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.page;

    default:
      return state;
  }
}
// Handle pokemon modal display
export function modal(state = initialState.modal, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return action.id;

    case HIDE_MODAL:
      return null;

    default:
      return state;
  }
}

export default combineReducers({
  items,
  hasFailed,
  isLoading,
  pages,
  page,
  modal,
});
