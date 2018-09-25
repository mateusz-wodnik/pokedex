import { combineReducers } from 'redux';
import {
  ADD_POKEMON_LIST,
  LOADING_POKEMON_LIST,
  FAILED_POKEMON_LIST,
  TOGGLE_MODAL,
} from './actions';

export const initialState = {
  items: [],
  hasFailed: false,
  isLoading: false,
  modal: false,
};

export function items(state = initialState.items, action) {
  switch (action.type) {
    case ADD_POKEMON_LIST:
      return [...state, ...action.items];

    default:
      return state;
  }
}

export function hasFailed(state = initialState.hasFailed, action) {
  switch (action.type) {
    case FAILED_POKEMON_LIST:
      return action.hasFailed;

    default:
      return state;
  }
}

export function isLoading(state = initialState.isLoading, action) {
  switch (action.type) {
    case LOADING_POKEMON_LIST:
      return action.isLoading;

    default:
      return state;
  }
}

export function modal(state = initialState.modal, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return action.show;

    default:
      return state;
  }
}

export default combineReducers({
  items,
  hasFailed,
  isLoading,
  modal,
});
